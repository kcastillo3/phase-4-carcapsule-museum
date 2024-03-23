"""Add imageUrl to Cars model

Revision ID: 05730daad72e
Revises: 8f0cca988750
Create Date: 2024-03-23 16:03:37.748957

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '05730daad72e'
down_revision = '8f0cca988750'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cars', schema=None) as batch_op:
        batch_op.add_column(sa.Column('imageUrl', sa.String(length=255), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cars', schema=None) as batch_op:
        batch_op.drop_column('imageUrl')

    # ### end Alembic commands ###