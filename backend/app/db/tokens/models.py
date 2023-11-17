from sqlalchemy.orm import relationship
from db.session import Base
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import Integer
from db.users.models import User


class Token(Base):
    __tablename__ = "tokens"

    id = Column(Integer, primary_key=True, autoincrement=True)
    access_token = Column(String, nullable=False, unique=True)
    refresh_token = Column(String, nullable=False, unique=True)
    user = relationship(User, uselist=False, backref='user')