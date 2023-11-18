from fastapi import FastAPI
from fastapi.routing import APIRouter

from api.tokens.handlers import token_router
from api.users.handlers import user_router

app = FastAPI(title="WatchTogether")

main_api_router = APIRouter()
main_api_router.include_router(user_router, prefix='/user', tags=["user"])
main_api_router.include_router(token_router, prefix='/token', tags=["token"])
app.include_router(main_api_router)