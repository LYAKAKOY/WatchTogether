import uuid
from api.users.schemas import CreateUser
from api.users.schemas import ShowUser
from api.users.schemas import UpdateUser
from api.users.schemas import UpdatePasswordUser
from db.users.dals import UserDAL
from hashing import Hasher
from sqlalchemy.ext.asyncio import AsyncSession


async def _create_user(body: CreateUser, session: AsyncSession) -> ShowUser | None:
    async with session.begin():
        user_dal = UserDAL(session)
        new_user = await user_dal.create_user(
            login=body.login, password=Hasher.get_password_hash(body.password)
        )
        if new_user is not None:
            return ShowUser(user_id=new_user.user_id, email=new_user.nickname,
                    nickname=new_user.nickname, avatar=new_user.avatar)


async def _update_user_password(body: UpdatePasswordUser, session: AsyncSession) -> ShowUser | None:
    async with session.begin():
        user_dal = UserDAL(session)
        user = await user_dal.set_password(
            login=body.login, password=Hasher.get_password_hash(body.password)
        )
        if user is not None:
            return ShowUser(user_id=user.user_id)

async def _update_user(user_id: uuid.UUID, update_user_data: dict, session: AsyncSession) -> ShowUser | None:
    async with session.begin():
        user_dal = UserDAL(session)
        user = await user_dal.update_user(user_id=user_id, **update_user_data)
        if user is not None:
            return ShowUser(user_id=user.user_id, email=user.nickname,
                    nickname=user.nickname, avatar=user.avatar)