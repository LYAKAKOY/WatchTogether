from datetime import timedelta
from logging import getLogger

from api.actions.tokens import _create_token, _update_access_token, _delete_token_by_user_id
from api.tokens.schemas import ShowToken, RefreshAccessToken
from db.users.models import User
from security import JWT
from fastapi import Depends, HTTPException, APIRouter
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status
import settings
from api.actions.auth import authenticate_user, get_current_user_from_token
from db.session import get_db

token_router = APIRouter()

logger = getLogger(__name__)
@token_router.post("/login", response_model=ShowToken)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)
) -> ShowToken:
    user = await authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = JWT.create_token(
        data={"sub": str(user.user_id), "other_custom_data": []},
        expires_delta=access_token_expires
    )
    refresh_token_expires = timedelta(minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES)
    refresh_token = JWT.create_token(data={"sub": str(user.user_id), "other_custom_data": []},
        expires_delta=refresh_token_expires)
    token = await _create_token(user_id=user.user_id, access_token=access_token, refresh_token=refresh_token, session=db)
    return token

@token_router.put("/refresh", response_model=ShowToken)
async def login_for_access_token(
    body: RefreshAccessToken, db: AsyncSession = Depends(get_db)
) -> ShowToken:
    user = await get_current_user_from_token(token=body.refresh_token, db=db)
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = JWT.create_token(
        data={"sub": str(user.user_id), "other_custom_data": []},
        expires_delta=access_token_expires
    )
    token = await _update_access_token(body, access_token, db)
    return token

@token_router.post("/logout", response_model=ShowToken)
async def login_for_access_token(
    current_user: User = Depends(get_current_user_from_token), db: AsyncSession = Depends(get_db)
) -> ShowToken:
    token = await _delete_token_by_user_id(user_id=current_user.user_id, session=db)
    return token