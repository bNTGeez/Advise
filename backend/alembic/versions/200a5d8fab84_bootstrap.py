"""bootstrap

Revision ID: 200a5d8fab84
Revises: 
Create Date: 2026-04-23 20:00:24.335356

"""
from typing import Sequence, Union

# revision identifiers, used by Alembic.
revision: str = '200a5d8fab84'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Bootstrap migration state for Phase 01 project setup."""
    pass


def downgrade() -> None:
    """Reset bootstrap migration state."""
    pass
