import uuid

from fastapi import HTTPException, UploadFile, File
from pydantic import BaseModel, field_validator


class TunedModel(BaseModel):
    class Config:
        from_attributes = True


class CreateUser(BaseModel):
    login: str
    password: str

    @field_validator("login")
    def validate_name(cls, value):
        if not len(value) > 5:
            raise HTTPException(
                status_code=422, detail="login is too short"
            )
        return value

    @field_validator("password")
    def validate_surname(cls, value):
        if not len(value) > 5:
            raise HTTPException(
                status_code=422, detail="password is too easy"
            )
        return value

class UpdateUser(BaseModel):
    user_id: uuid.UUID
    nickname: str
    avatar: UploadFile

class UpdatePasswordUser(BaseModel):
    login: str
    password: str

    @field_validator("password")
    def validate_surname(cls, value):
        if not len(value) > 5:
            raise HTTPException(
                status_code=422, detail="password is too easy"
            )
        return value


class ShowUser(TunedModel):
    user_id: uuid.UUID
    nickname: str
    avatar: File