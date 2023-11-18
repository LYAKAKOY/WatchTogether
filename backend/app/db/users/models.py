import uuid

from db.session import Base
from fastapi_storages import FileSystemStorage
from fastapi_storages.integrations.sqlalchemy import FileType
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import UUID

storage = FileSystemStorage(path="picture/avatars")


class User(Base):
    __tablename__ = "users"

    user_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4())
    login = Column(String, nullable=False, unique=True, index=True)
    password = Column(String, nullable=False)
    nickname = Column(String, nullable=True, default=None)
    # email = Column(String, nullable=True, default=None, unique=True)
    avatar = Column(FileType(storage=storage), nullable=True, default=None)
