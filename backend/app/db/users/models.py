import uuid

from db.session import Base
from fastapi_storages import FileSystemStorage
from sqlalchemy import Column, Boolean
from sqlalchemy import String
from sqlalchemy import UUID

storage = FileSystemStorage(path="picture/avatars")


class User(Base):
    __tablename__ = "users"

    user_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4())
    login = Column(String, nullable=False, unique=True, index=True)
    password = Column(String, nullable=False)
    nickname = Column(String, nullable=True, default=None)
    email = Column(String, nullable=True, default=None, unique=True)
    verified_email = Column(Boolean, default=False)
    avatar = Column(String, nullable=True, default=None)
