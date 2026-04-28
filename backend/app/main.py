from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.api.router import api_router
from app.core.config import settings
from app.db.session import engine


def create_application() -> FastAPI:
    app = FastAPI(
        title=settings.app_name,
        debug=settings.app_debug,
        version="0.1.0",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.backend_cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/health", tags=["health"])
    def health_check():
        try:
            with engine.connect() as connection:
                connection.execute(text("SELECT 1"))
            return {
                "status": "ok",
                "database": "ok",
                "environment": settings.app_env,
            }
        except SQLAlchemyError:
            return JSONResponse(
                status_code=503,
                content={
                    "status": "error",
                    "database": "error",
                    "environment": settings.app_env,
                },
            )

    app.include_router(api_router, prefix=settings.api_v1_prefix)

    return app


app = create_application()
