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

    def get_peliculas(self):
        query = f"SELECT * FROM {self.table}"
        with self.motor.connect() as conexion:
            result = conexion.execute(text(query)).fetchall()
            return result

    def get_una_pelicula(self, nombre):
        query = f"""SELECT * FROM {self.table} WHERE nombre LIKE '%{nombre}%'"""
        with self.motor.connect() as conexion:
            result = conexion.execute(text(query)).fetchone()
            return result

    def query_runner(self, query) -> None:
        with self.motor.connect() as conexion:
            conexion.execute(text(query))
            conexion.commit()
        print("Base de dato creada !!!")

    def agregar_pelicula(self, pelicula):
        query_agregar: str = pelicula.query_pelicula(self.table)
        self.query_runner(query_agregar)
