import os
from envparse import Env
from fastapi_mail import ConnectionConfig

env = Env()

DATABASE_URL = env.str(
    "DATABASE_URL",
    default=f"postgresql+asyncpg://{os.environ.get('POSTGRES_USER')}:{os.environ.get('POSTGRES_PASSWORD')}@"
    f"{os.environ.get('DATABASE')}:5432/{os.environ.get('POSTGRES_DB')}",
)

SECRET_KEY: str = env.str("SECRET_KEY", default="secret_key")
ALGORITHM: str = env.str("ALGORITHM", default="HS256")
ACCESS_TOKEN_EXPIRE_MINUTES: int = env.int("ACCESS_TOKEN_EXPIRE_MINUTES", default=1440)
REFRESH_TOKEN_EXPIRE_MINUTES: int = env.int("REFRESH_TOKEN_EXPIRE_MINUTES", default=43800)

email_conf = ConnectionConfig(
    MAIL_USERNAME=os.environ.get('EMAIL_HOST_USER'),
    MAIL_PASSWORD=os.environ.get('EMAIL_HOST_PASSWORD'),
    MAIL_FROM=os.environ.get('EMAIL_HOST_USER'),
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_FROM_NAME="WatchTogether",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)