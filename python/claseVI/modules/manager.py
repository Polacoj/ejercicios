from modules.sqlite_db import SqliteBaseDato


# --------HERENCIA de CLASE a CLASE-----------------
class ManagerSqllite(SqliteBaseDato):
    def __init__(self, dir_conex: str):  # -----------CONSTRUCTOR de la CLASE---------------
        super().__init__(dir_conex)
