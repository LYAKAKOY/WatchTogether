from typing import Any
from typing import Generator

import settings
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

engine = create_async_engine(settings.DATABASE_URL, echo=True)

AsyncSession = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


async def get_db() -> Generator[AsyncSession, Any, None]:
    async with AsyncSession() as session:
        yield session
