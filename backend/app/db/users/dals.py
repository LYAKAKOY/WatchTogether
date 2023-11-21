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
            **kwargs
    ) -> User | None:
        query = (
            update(User)
            .where(User.user_id == user_id)
            .values(kwargs)
            .returning(User)
        )
        try:
            res = await self.db_session.execute(query)
            user = res.fetchone()
            await self.db_session.commit()
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
        try:
            res = await self.db_session.execute(query)
            user = res.fetchone()
            await self.db_session.commit()
            if user is not None:
                return user[0]
        except IntegrityError as error:
            await self.db_session.rollback()
            return

    async def add_friend(self, user_id: uuid.UUID, friend_id: uuid.UUID):
        user = await self.get_user_by_user_id(user_id=user_id)
        friend = await self.get_user_by_user_id(user_id=friend_id)
        if user is not None and friend is not None:
            try:
                user.friends.append(friend)
                self.db_session.add(user)
                await self.db_session.flush()
                await self.db_session.commit()
                return user
            except IntegrityError as error:
                await self.db_session.rollback()
                pass

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
