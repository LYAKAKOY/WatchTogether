from pydantic import BaseModel


class TunedModel(BaseModel):
    class Config:
        from_attributes = True


class RefreshAccessToken(BaseModel):
    refresh_token: str


class ShowToken(TunedModel):
    access_token: str | None
    refresh_token: str | None
