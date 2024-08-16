class Pelicula:
    def __init__(self, nombre, duracion, genero, anio):
        self.nombre = nombre
        self.duracion = duracion
        self.genero = genero
        self.anio = anio

    def query_pelicula(self, table: str) -> str:
        return f"""
            INSERT INTO {table}
            (nombre, duracion, genero, anio)
            VALUES
            ('{self.nombre}', '{self.duracion}', '{self.genero}', '{self.anio}');"""

    def delete_query(self, table: str) -> str:
        return f"""
            DELETE FROM {table}
            WHERE
                nombre = '{self.nombre}'"""

    def update_query(self, table, modificar_campo, valor_nuevo_campo) -> str:
        if modificar_campo == 'duracion':
            return f"""
                UPDATE {table}
                SET {modificar_campo} = {valor_nuevo_campo}
                WHERE
                nombre = '{self.nombre}'
                """

        return f"""
            UPDATE {table}
            SET {modificar_campo} = {valor_nuevo_campo}
            WHERE
            nombre = {self.nombre}"""
