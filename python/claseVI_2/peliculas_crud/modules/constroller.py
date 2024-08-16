from sqlalchemy import text


class Controller:
    def agregar_pelicula(self, pelicula):
        query_agregar: str = pelicula.query_pelicula(self.table)
        self.query_runner(query_agregar)

    def get_peliculas(self):
        query = f"SELECT * FROM {self.table}"
        with self.motor.connect() as conexion:
            result = conexion.execute(text(query)).fetchall()
            return result

    def get_una_pelicula(self, nombre):
        query = f"""SELECT * FROM {self.table}
            WHERE nombre LIKE '%{nombre}%'"""
        with self.motor.connect() as conexion:
            result = conexion.execute(text(query)).fetchone()
            return result

    def delete_query(self, nombre):
        query: str = f"""
            DELETE FROM {self.table}
            WHERE
                nombre = '{nombre}'"""
        self.query_runner(query)
        print("borrado")

    def update_query(self, nombre, modificar_campo, valor_nuevo_campo) -> str:
        query: str = ""
        if modificar_campo == 'duracion':
            query = f"""
                UPDATE {self.table}
                SET {modificar_campo} = {valor_nuevo_campo}
                WHERE
                nombre = '{nombre}'
                """
        else:
            query = f"""
                UPDATE {self.table}
                SET {modificar_campo} = '{valor_nuevo_campo}'
                WHERE
                nombre = '{nombre}'"""
        self.query_runner(query)