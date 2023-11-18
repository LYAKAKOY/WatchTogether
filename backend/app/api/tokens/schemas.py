from pydantic import BaseModel


class TunedModel(BaseModel):
    class Config:
        from_attributes = True


class UpdateToken(BaseModel):
    refresh_token: str


class ShowToken(TunedModel):
    access_token: str
    refresh_token: str
