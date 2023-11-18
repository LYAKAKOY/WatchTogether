from datetime import timedelta
from logging import getLogger

from api.actions.tokens import _create_token
from api.tokens.schemas import ShowToken
from security import JWT
from fastapi import Depends, HTTPException, APIRouter
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from starlette import status
import settings
from api.actions.auth import authenticate_user
from db.session import get_db

token_router = APIRouter()

logger = getLogger(__name__)
@token_router.post("/login/token", response_model=ShowToken)
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
    token = await _create_token(user.user_id, access_token=access_token, refresh_token=refresh_token, session=db)
    return token