"""Rename 'content' column to 'review' in Reviews table

Revision ID: 3b8fc99b0c22
Revises: ca3db1fa04a1
Create Date: 2024-03-23 21:36:14.848758

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3b8fc99b0c22'
down_revision = 'ca3db1fa04a1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('_alembic_tmp_reviews')
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('review', sa.Text(), nullable=False))
        batch_op.drop_column('content')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('content', sa.TEXT(), nullable=False))
        batch_op.drop_column('review')

    op.create_table('_alembic_tmp_reviews',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('user_id', sa.INTEGER(), nullable=False),
    sa.Column('car_id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=100), nullable=True),
    sa.Column('email', sa.VARCHAR(length=255), nullable=True),
    sa.Column('review', sa.TEXT(), nullable=False),
    sa.ForeignKeyConstraint(['car_id'], ['cars.id'], name='fk_reviews_car_id_cars'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='fk_reviews_user_id_users'),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###