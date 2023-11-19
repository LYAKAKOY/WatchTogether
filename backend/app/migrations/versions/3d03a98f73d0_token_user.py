"""token user

Revision ID: 3d03a98f73d0
Revises: 6809ace5ae84
Create Date: 2023-11-18 08:35:24.794559

"""
from typing import Sequence
from typing import Union

import sqlalchemy as sa
from alembic import op


# revision identifiers, used by Alembic.
revision: str = "3d03a98f73d0"
down_revision: Union[str, None] = "6809ace5ae84"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("tokens", sa.Column("user_id", sa.UUID(), nullable=False))
    op.create_unique_constraint(None, "tokens", ["user_id"])
    op.create_foreign_key(
        None, "tokens", "users", ["user_id"], ["user_id"], ondelete="CASCADE"
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, "tokens", type_="foreignkey")
    op.drop_constraint(None, "tokens", type_="unique")
    op.drop_column("tokens", "user_id")
    # ### end Alembic commands ###