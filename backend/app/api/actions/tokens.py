import uuid
from sqlalchemy.ext.asyncio import AsyncSession
from api.tokens.schemas import ShowToken, RefreshAccessToken
from db.tokens.dals import TokenDAL

async def _get_token(user_id: uuid.UUID , session: AsyncSession) -> ShowToken | None:
    async with session.begin():
        token_dal = TokenDAL(session)
        token = await token_dal.get_token_by_user_id(user_id=user_id)
        if token is not None:
            return ShowToken(access_token=token.access_token, refresh_token=token.refresh_token)
async def _create_token(user_id: uuid.UUID , access_token: str, refresh_token: str, session: AsyncSession) -> ShowToken | None:
    async with session.begin():
        token_dal = TokenDAL(session)
        new_token = await token_dal.create_token(user_id=user_id, access_token=access_token, refresh_token=refresh_token)
        if new_token is not None:
            return ShowToken(access_token=new_token.access_token, refresh_token=new_token.refresh_token)


async def _update_access_token(body: RefreshAccessToken, access_token: str,  session: AsyncSession) -> ShowToken | None:
    async with session.begin():
        token_dal = TokenDAL(session)
        token = await token_dal.update_access_token(access_token=access_token, refresh_token=body.refresh_token)
        if token is not None:
            return ShowToken(access_token=token.access_token, refresh_token=token.refresh_token)

async def _delete_token_by_user_id(user_id: uuid.UUID, session: AsyncSession) -> ShowToken | None:
    async with session.begin():
        token_dal = TokenDAL(session)
        token = await token_dal.delete_token_by_user_id(user_id=user_id)
        if token is not None:
            return ShowToken(access_token=None, refresh_token=None)