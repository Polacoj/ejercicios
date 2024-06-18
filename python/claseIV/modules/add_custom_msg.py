def add_custom_msg(user: dict, msg: str = "Bienvenidisimo") -> None:
    user["msg"] = msg
    return user
