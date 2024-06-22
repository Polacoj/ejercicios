import sqlite3
from sqlalchemy import create_engine
from sqlalchemy.sql import text


def insertar_valores_base_dato(query: str):
    engine = create_engine("sqlite://///Users/alexisjankowicz/Proyectos/ejercicios/python/claseV-2/clientes.db")
    with engine.connect() as connection:
        result = connection.execute(text(query))
        connection.commit()
        print("exito en insercion")


def crear_base_datos(nombre: str):
    connection = sqlite3.connect(nombre)
    cursor = connection.cursor()
    cursor.execute(
        """
    CREATE TABLE IF NOT EXISTS clientes
    (
        dni INTEGER PRIMARY KEY,
        nombre TEXT,
        apellido TEXT,
        email VARCHAR(100),
        pass VARCHAR(100)
    );
    """
    )
    connection.commit()


def main():
    crear_base_datos("clientes.db")
    query: str = """
    INSERT INTO clientes (
        dni, nombre, apellido, email, pass
    )
    VALUES (26490572,'alexis','jankowicz','jankowicz@gmail.com','pass345')
    """
    insertar_valores_base_dato(query)


if __name__ == "__main__":
    main()
