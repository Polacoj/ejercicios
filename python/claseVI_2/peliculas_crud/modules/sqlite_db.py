from sqlalchemy import create_engine, text


class SqliteBaseDato:  # --------CONEXION a la base de dato
    def __init__(self, dir_conex: str, table: str = 'pelicula'):
        dir_conex = f'sqlite:///{dir_conex}'
        self.motor = create_engine(dir_conex)
        self.table = table
        query = f""" CREATE TABLE IF NOT EXISTS {self.table}(
            id_pelicula INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre VARCHAR(200),
            duracion INT,
            genero VARCHAR(100),
            anio DATE
            )"""
        self.query_runner(query)

    def query_runner(self, query) -> None:
        with self.motor.connect() as conexion:
            conexion.execute(text(query))
            conexion.commit()
        print("Base de dato creada !!!")
