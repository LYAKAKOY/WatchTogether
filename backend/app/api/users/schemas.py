import uuid
from password_strength import PasswordStats
from fastapi import HTTPException
from pydantic import BaseModel, EmailStr
from pydantic import field_validator


class TunedModel(BaseModel):
    class Config:
        from_attributes = True


class CreateUser(BaseModel):
    login: str
    password: str

    @field_validator("login")
    def validate_name(cls, value):
        if not len(value) >= 5:
            raise HTTPException(status_code=422, detail="login is too short")
        return value

    @field_validator("password")
    def validate_surname(cls, value):
        if not PasswordStats(value).strength() > 0.5:
            raise HTTPException(status_code=422, detail="password is too easy")
        return value

class UpdateUser(BaseModel):
    nickname: str | None
    email: EmailStr | None


class UpdatePasswordUser(BaseModel):
    login: str
    password: str

    @field_validator("password")
    def validate_surname(cls, value):
        if not PasswordStats(value).strength() > 0.5:
            raise HTTPException(status_code=422, detail="password is too easy")
        return value

class VerifyEmail(BaseModel):
    email: EmailStr
class ShowUser(TunedModel):
    user_id: uuid.UUID
    email: EmailStr | None = None
    nickname: str | None = None
    avatar: str | None = None
