def add_mail_pwd(user: dict) -> dict:
    """_summary_
    Agrega una dirección de correo electrónico y una contraseña predeterminada a un usuario.
    Parámetros:
    user (dict): Diccionario que contiene la información del usuario. Debe tener una clave 'nombre'.
    Retorna:
    dict: El diccionario del usuario con la clave 'email' y 'pwd' agregadas.

    Ejemplo:
    >>> user = {'nombre': 'Juan Pérez'}
    >>> add_mail_pwd(user)
    {'nombre': 'Juan Pérez', 'email': 'Juan Pérez@codoAcodo.gob.ar', 'pwd': 'pass123!'}
    """
    empresa = "codoAcodo"
    nombre_user = user.get('nombre', 'nuevo_ingreso')
    user["email"] = f"{nombre_user}@{empresa}.gob.ar"
    user["pwd"] = "pass123!"
    return user
