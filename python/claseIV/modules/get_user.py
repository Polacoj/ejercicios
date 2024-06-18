def get_user() -> dict:
    """
    Obtiene la información del usuario a través de la entrada del usuario y la devuelve en un diccionario.

    Retorna:
    dict: Un diccionario con las claves 'nombre' y 'apellido' que contienen la información del usuario.

    Nota:
    Esta función utiliza la función built-in input() para obtener la entrada del usuario, por lo que se bloqueará hasta que el usuario ingrese la información solicitada.

    Ejemplo:
    >>> get_user()
    ingrese nombre: Juan
    ingrese apellido: Pérez
    {'nombre': 'Juan', 'apellido': 'Pérez'}
    """
    usuario = {}
    usuario["nombre"] = input("ingrese nombre: \n")
    usuario["apellido"] = input("ingrese apellido: \n")
    return usuario
