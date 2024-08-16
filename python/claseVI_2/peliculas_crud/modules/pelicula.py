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

    
    
