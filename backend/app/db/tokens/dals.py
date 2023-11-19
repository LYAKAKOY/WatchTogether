import uuid

from db.tokens.models import Token
from sqlalchemy import delete, select
from sqlalchemy import update
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession


class TokenDAL:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def create_token(
        self, user_id: uuid.UUID, access_token: str, refresh_token: str
    ) -> Token | None:
        new_token = Token(
            access_token=access_token, refresh_token=refresh_token, user_id=user_id
        )
        try:
            self.db_session.add(new_token)
            await self.db_session.flush()
            await self.db_session.commit()
            return new_token
        except IntegrityError as error:
            await self.db_session.rollback()
            return

    async def update_access_token(
        self, access_token: str, refresh_token: str
    ) -> Token | None:
        query = (
            update(Token)
            .where(Token.refresh_token == refresh_token)
            .values(access_token=access_token)
            .returning(Token)
        )
        try:
            res = await self.db_session.execute(query)
            token = res.fetchone()
            await self.db_session.commit()
            if token is not None:
                return token[0]
        except IntegrityError as error:
            await self.db_session.rollback()
            return

    async def delete_token_by_user_id(self, user_id: uuid.UUID) -> Token | None:
        query = delete(Token).where(Token.user_id == user_id).returning(Token.user_id)
        try:
            res = await self.db_session.execute(query)
            token = res.fetchone()
            if token is not None:
                return token[0]
        except IntegrityError as error:
            await self.db_session.rollback()
            return

    async def get_token_by_user_id(self, user_id: uuid.UUID) -> Token | None:
        query = select(Token).where(Token.user_id == user_id)
        res = await self.db_session.execute(query)
        token = res.fetchone()
        if token is not None:
            return token[0]