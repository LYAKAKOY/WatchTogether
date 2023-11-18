"""delete friends in user model

Revision ID: 5ea112b30db2
Revises: 09c5db91b48f
Create Date: 2023-11-18 08:25:44.403682

"""
from typing import Sequence
from typing import Union

import sqlalchemy as sa
from alembic import op


# revision identifiers, used by Alembic.
revision: str = "5ea112b30db2"
down_revision: Union[str, None] = "09c5db91b48f"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint("users_friends_fkey", "users", type_="foreignkey")
    op.drop_column("users", "friends")
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "users", sa.Column("friends", sa.UUID(), autoincrement=False, nullable=True)
    )
    op.create_foreign_key(
        "users_friends_fkey", "users", "users", ["friends"], ["user_id"]
    )
    # ### end Alembic commands ###
