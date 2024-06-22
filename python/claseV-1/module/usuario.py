class Usuario:
    pwd: str = "Pass123!"

    def __init__(self, nombre, apellido) -> None:  # -------CONSTRUCTOR de la CLASE----
        self.nombre = nombre  # -------ATRIBUTOS de INSTANCIA---------
        self.apellido = apellido
        self.email: str

    def set_mail(self, nombre_empresa: str) -> None:
        self.email = f"{self.nombre}@{nombre_empresa}.gob.ar"
        print("se agrego Email de la empresa")

    def display_name(self):
        return self.nombre

    def send_email(self) -> None:
        text: str = f"""Este mail sera recibido solo por:
        >> {self.apellido}
        >> email: {self.email}
        >> contraseña: {'*'*len(self.pwd)}"""
        print(text)

    def update_nombre(self, nuevo_nombre) -> None:
        self.nombre = nuevo_nombre
        print("nombre actualizado")
