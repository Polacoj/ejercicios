from modules.sqlite_db import SqliteBaseDato
from modules.constroller import Controller


# --------HERENCIA de CLASE a CLASE-----------------
class ManagerSqllite(SqliteBaseDato, Controller):
    def __init__(self, dir_conex: str):  # -----------CONSTRUCTOR de la CLASE---------------
        super().__init__(dir_conex)
