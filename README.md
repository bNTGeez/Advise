# Advisor Intelligence

Project structure:

```text
financial-client/
  frontend/
  backend/
  docs/
  docker-compose.yml
  README.md
  .env.example
```

## Local setup

1. Copy `.env.example` to `.env`.
2. Start PostgreSQL with Docker Compose.
3. Start the backend.
4. Start the frontend.

## Database

Start Postgres with pgvector:

```bash
docker compose up -d db
```

The database container:

- uses the `pgvector/pgvector:pg17` image
- persists data in a Docker volume
- enables the `vector` extension on startup

## Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp ../.env.example ../.env
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

Useful backend commands:

```bash
./.venv/bin/alembic upgrade head
./.venv/bin/alembic current
./.venv/bin/uvicorn app.main:app --reload --port 8000
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Health checks

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000/health`
- Backend docs: `http://localhost:8000/docs`

Expected backend health response:

```json
{
  "status": "ok",
  "database": "ok",
  "environment": "development"
}
```

