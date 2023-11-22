import uuid

from sqlalchemy.orm import relationship

from db.session import Base
from fastapi_storages import FileSystemStorage
from sqlalchemy import Column, Boolean, ForeignKey, select
from sqlalchemy import String
from sqlalchemy import UUID, Table

storage = FileSystemStorage(path="picture/avatars")

friendship = Table('friendship', Base.metadata,
                   Column('user_id', UUID(as_uuid=True), ForeignKey('users.user_id'), primary_key=True),
                   Column('friend_id', UUID(as_uuid=True), ForeignKey('users.user_id'), primary_key=True)
                   )


class User(Base):
    __tablename__ = "users"

    user_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4())
    login = Column(String, nullable=False, unique=True, index=True)
    password = Column(String, nullable=False)
    nickname = Column(String, nullable=True, default=None)
    email = Column(String, nullable=True, default=None, unique=True)
    verified_email = Column(Boolean, default=False)
    avatar = Column(String, nullable=True, default=None)
    friends = relationship('User',
                           secondary=friendship,
                           primaryjoin=user_id == friendship.c.user_id,
                           secondaryjoin=user_id == friendship.c.friend_id,
                           foreign_keys=[friendship.c.user_id, friendship.c.friend_id],
                           backref='friends_of', lazy="dynamic")
