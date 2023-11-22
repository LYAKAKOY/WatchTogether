import json
import logging
from logging import getLogger
import random
from typing import List

from fastapi_mail import ConnectionConfig, FastMail, MessageType, MessageSchema
from pydantic import BaseModel, EmailStr
from sqlalchemy import select
from sqlalchemy.util import greenlet_spawn
from starlette.responses import StreamingResponse, JSONResponse
from api.actions.auth import get_current_user_from_token
from api.actions.users import _create_user, _update_user, _add_friend_to_user
from api.actions.users import _update_user_password
from api.users.schemas import CreateUser, UpdatePasswordUser, VerifyEmail, AddFriend
from api.users.schemas import ShowUser
from api.users.schemas import UpdateUser
from db.session import get_db
from fastapi import APIRouter, UploadFile, File
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession

from db.users.models import User, storage, friendship
from settings import email_conf

user_router = APIRouter()

logger = getLogger(__name__)


@user_router.post("/reg", response_model=ShowUser)
async def create_user(user: CreateUser, db: AsyncSession = Depends(get_db)) -> ShowUser:
    try:
        user = await _create_user(user, db)
        if user is None:
            raise HTTPException(status_code=400, detail="this login already exists")
        return user
    except IntegrityError as err:
        logger.error(err)
        raise HTTPException(status_code=503, detail=f"Database error: {err}")


@user_router.put("/profile", response_model=ShowUser)
async def change_profile(
        body: UpdateUser,
        current_user: User = Depends(get_current_user_from_token),
        db: AsyncSession = Depends(get_db)
) -> ShowUser:
    try:
        update_user_data = body.model_dump(exclude_none=True)
        user = await _update_user(user_id=current_user.user_id, update_user_data=update_user_data, session=db)
        if user is None:
            raise HTTPException(status_code=400, detail="Something went wrong")
        return user
    except IntegrityError as err:
        logger.error(err)
        raise HTTPException(status_code=503, detail=f"Database error: {err}")


@user_router.put("/add_friend", response_model=ShowUser)
async def change_profile(
        body: AddFriend,
        current_user: User = Depends(get_current_user_from_token),
        db: AsyncSession = Depends(get_db)
) -> ShowUser:
    try:
        user = await _add_friend_to_user(user_id=current_user.user_id, body=body, session=db)
        if user is None:
            raise HTTPException(status_code=400, detail="Something went wrong")
        return user
    except IntegrityError as err:
        logger.error(err)
        raise HTTPException(status_code=503, detail=f"Database error: {err}")


@user_router.put("/profile/avatar", response_model=ShowUser)
async def change_avatar_profile(
        avatar: UploadFile = File(...),
        current_user: User = Depends(get_current_user_from_token),
        db: AsyncSession = Depends(get_db)
) -> ShowUser:
    try:
        file_path = f"picture/avatars/{avatar.filename}"

        file = storage.write(avatar.file, file_path)

        user = await _update_user(user_id=current_user.user_id, update_user_data={"avatar": file}, session=db)
        if user is None:
            raise HTTPException(status_code=400, detail="Something went wrong")
        return user
    except IntegrityError as err:
        logger.error(err)
        raise HTTPException(status_code=503, detail=f"Database error: {err}")


@user_router.get("/profile")
async def get_profile(
        current_user: User = Depends(get_current_user_from_token)
):
    return await greenlet_spawn(current_user.friends.all)


@user_router.put("/change_password", response_model=ShowUser)
async def change_password(
        body: UpdatePasswordUser,
        db: AsyncSession = Depends(get_db)
) -> ShowUser:
    try:
        user = await _update_user_password(body, db)
        if user is None:
            raise HTTPException(status_code=400, detail="The password is too easy")
        return user
    except IntegrityError as err:
        logger.error(err)
        raise HTTPException(status_code=503, detail=f"Database error: {err}")


@user_router.get("profile/avatar", response_class=StreamingResponse)
async def get_profile_avatar(
        current_user: User = Depends(get_current_user_from_token),
) -> StreamingResponse:
    return StreamingResponse(open(current_user.avatar, "rb"), media_type="image/jpeg")


@user_router.post("/send_code_to_email", response_class=JSONResponse)
async def send_code_to_email(body: VerifyEmail) -> JSONResponse:
    confirmation_code = "".join(random.choice("0123456789") for _ in range(4))
    html_message = f"""<p>Hi, this is a WatchTogether. Your code is <b>{confirmation_code}</b></p> """

    message = MessageSchema(
        subject="Verify Email",
        recipients=[body.email],
        body=html_message,
        subtype=MessageType.html)

    fm = FastMail(email_conf)
    await fm.send_message(message)
    return JSONResponse(status_code=200, content={"message": "code has been sent"})
