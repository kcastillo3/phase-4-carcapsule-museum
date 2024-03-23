# ${message}
"""${upgrades if upgrades else "Empty revision"}
Revision ID: ${up_revision}
Revises: ${down_revision | comma,n}
Create Date: ${create_date}

"""

# revision identifiers, used by Alembic.
revision = '${up_revision}'
down_revision = '${down_revision}'
branch_labels = ${repr(branch_labels)}
depends_on = ${repr(depends_on)}


def upgrade():
    ${indent("\n".join(upgrade_ops), 4 * ' ')}
    pass


def downgrade():
    ${indent("\n".join(downgrade_ops), 4 * ' ')}
    pass
