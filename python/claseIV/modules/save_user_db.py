def save_user_db(**kwargs) -> None:
    """
    Guarda un usuario en una base de datos.

    Parámetros:
    user (dict): Diccionario que contiene la información del usuario.
    data_base (list): Lista que representa la base de datos donde se guardará el usuario.
    option (str, opcional): Opción para guardar el usuario. Debe ser 'si', 's', 'yes' o 'y' (en minúsculas o mayúsculas). Por defecto es 's'.

    Retorna:
    None: No devuelve nada, solo guarda el usuario en la base de datos.

    Nota:
    Si la opción no es válida, la función no guarda el usuario y devuelve None.

    Ejemplo:
    >>> user = {'nombre': 'Juan', 'apellido': 'Pérez'}
    >>> data_base = []
    >>> save_user_db(user, data_base, 'si')
    >>> data_base
    [{'nombre': 'Juan', 'apellido': 'Pérez'}]
    """
    user: dict = kwargs["user"]
    data_base: list = kwargs["data_base"]
    option: str = kwargs.get("option", "si")

    opcion_guardar:list = ['si', 's', 'yes', 'y']

    if option.lower() in opcion_guardar:
        data_base.append(user)
        print(data_base)
    else:
        return None
