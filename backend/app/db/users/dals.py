import uuid

from db.users.models import User
from fastapi import UploadFile
from sqlalchemy import select
from sqlalchemy import update
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession


class UserDAL:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def create_user(self, login: str, password: str) -> User | None:
        new_user = User(login=login, password=password)
        try:
            self.db_session.add(new_user)
            await self.db_session.flush()
            await self.db_session.commit()
            return new_user
        except IntegrityError as error:
            await self.db_session.rollback()
            return

    async def update_user(
        self,
        user_id: str,
        nickname: str | None = None,
        avatar: UploadFile | None = None,
    ) -> User | None:
        query = (
            update(User)
            .where(User.user_id == user_id)
            .values(nickname=nickname, avatar=avatar)
            .returning(User.user_id)
        )
        try:
            res = await self.db_session.execute(query)
            user = res.fetchone()
            if user is not None:
                return user[0]
        except IntegrityError as error:
            await self.db_session.rollback()
            return

    async def set_password(self, login: str, password: str) -> User | None:
        query = (
            update(User)
            .where(User.login == login)
            .values(password=password)
            .returning(User.user_id)
        )
        res = await self.db_session.execute(query)
        user = res.fetchone()
        if user is not None:
            return user[0]

    async def get_user_by_login(self, login: str) -> User | None:
        query = select(User).where(User.login == login)
        res = await self.db_session.execute(query)
        user = res.fetchone()
        if user is not None:
            return user[0]

    async def get_user_by_user_id(self, user_id: uuid.UUID) -> User | None:
        query = select(User).where(User.user_id == user_id)
        res = await self.db_session.execute(query)
        user = res.fetchone()
        if user is not None:
            return user[0]
