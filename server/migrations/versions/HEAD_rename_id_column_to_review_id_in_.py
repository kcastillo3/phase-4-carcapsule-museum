"""Rename id column to review_id in Reviews model

Revision ID: HEAD
Revises: 3b8fc99b0c22
Create Date: 2024-03-24 00:29:59.472336

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'HEAD'
down_revision = '3b8fc99b0c22'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('_alembic_tmp_reviews')
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('review_id', sa.Text(), nullable=False))
        batch_op.drop_column('id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('review_id', sa.TEXT(), nullable=False))
        batch_op.drop_column('id')

   

