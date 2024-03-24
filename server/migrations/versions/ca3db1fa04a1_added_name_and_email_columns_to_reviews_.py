"""Added name and email columns to Reviews table

Revision ID: ca3db1fa04a1
Revises: 05730daad72e
Create Date: 2024-03-23 20:24:22.803758

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ca3db1fa04a1'
down_revision = '05730daad72e'
branch_labels = None
depends_on = None



def upgrade():
    # Rename 'content' column to 'review'
    op.alter_column('reviews', 'content', new_column_name='review')

def downgrade():
    # Downgrade logic, if needed
    op.alter_column('reviews', 'review', new_column_name='content')
