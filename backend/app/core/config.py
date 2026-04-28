from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=(".env", "../.env"),
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    app_name: str = Field(default="Advisor Intelligence API")
    app_env: str = Field(default="development")
    app_debug: bool = Field(default=True)
    api_v1_prefix: str = Field(default="/api/v1")
    database_url: str = Field(
        default="postgresql+psycopg://postgres:postgres@localhost:5433/advise"
    )
    frontend_url: str = Field(default="http://localhost:3000")
    backend_url: str = Field(default="http://localhost:8000")
    openai_api_key: str | None = Field(default=None)
    auth_secret: str = Field(default="change-me")
    upload_storage_dir: str = Field(default="backend/storage/uploads")
    backend_cors_origins: list[str] = Field(default_factory=lambda: ["http://localhost:3000"])

    @field_validator("backend_cors_origins", mode="before")
    @classmethod
    def parse_cors_origins(cls, value: str | list[str]) -> list[str]:
        if isinstance(value, list):
            return value
        if isinstance(value, str):
            return [item.strip() for item in value.split(",") if item.strip()]
        raise TypeError("BACKEND_CORS_ORIGINS must be a comma-separated string or list")


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
