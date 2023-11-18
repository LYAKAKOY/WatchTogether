from logging import getLogger
from api.actions.auth import get_current_user_from_token
from api.actions.users import _create_user, _update_user
from api.actions.users import _update_user_password
from api.users.schemas import CreateUser, UpdatePasswordUser
from api.users.schemas import ShowUser
from api.users.schemas import UpdateUser
from db.session import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession

from db.users.models import User

user_router = APIRouter()

logger = getLogger(__name__)


@user_router.post("/reg", response_model=ShowUser)
async def create_user(user: CreateUser, db: AsyncSession = Depends(get_db)) -> ShowUser:
    try:
        user = await _create_user(user, db)
        if user is None:
            raise HTTPException(status_code=400, detail="the login is already occupied")
        return user
    except IntegrityError as err:
        logger.error(err)
        raise HTTPException(status_code=503, detail=f"Database error: {err}")

@user_router.put("/profile", response_model=ShowUser)
async def change_password(
    user_update: UpdateUser,
    current_user: User = Depends(get_current_user_from_token),
    db: AsyncSession = Depends(get_db)
) -> ShowUser:
    try:
        user = await _update_user(user_id=current_user.user_id, body=user_update, session=db)
        if user is None:
            raise HTTPException(status_code=400, detail="Something went wrong")
        return user
    except IntegrityError as err:
        logger.error(err)
        raise HTTPException(status_code=503, detail=f"Database error: {err}")

@user_router.get("/profile", response_model=ShowUser)
async def change_password(
    current_user: User = Depends(get_current_user_from_token),
) -> ShowUser:
    return ShowUser(user_id=current_user.user_id, nickname=current_user.nickname, avatar=current_user.avatar)
@user_router.put("/change_password", response_model=ShowUser)
async def change_password(
    user_update: UpdatePasswordUser,
    db: AsyncSession = Depends(get_db)
) -> ShowUser:
    try:
        user = await _update_user_password(user_update, db)
        if user is None:
            raise HTTPException(status_code=400, detail="The password is too easy")
        return user
    except IntegrityError as err:
        logger.error(err)
        raise HTTPException(status_code=503, detail=f"Database error: {err}")