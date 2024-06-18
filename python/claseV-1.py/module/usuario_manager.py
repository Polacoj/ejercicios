from .usuario import Usuario


class ManagerUsuario:

    def __init__(self, db:list = []):
        # if db is None:
        #     db = []
        self.db = db

    def controller_save_user(self, usuario=Usuario):
        if isinstance(self.db, list):
            self.db.append(usuario)
            print(f"usuario {usuario.display_name()
                             }, agregado a la lista de la Base de Datos")
            return
        print("no se puede guardar")

    def controller_read_user(self, apellido) -> Usuario:
        if isinstance(self.db, list):
            for usuario in self.db:
                if usuario.apellido == apellido:
                    print("usuario encontrado")
                    return usuario
            print({"error": "usuario no encontrado", "status": 404})
        print("no se puede recorrer la base de dato, por no ser una lista")

    def controller_update_user(self, apellido: str, nuevo_nombre: str):
        user = self.controller_read_user(apellido)
        if user:
            user.update_apellido(nuevo_nombre)
            print("actualizado")
            return
        return print("usuario no encontrado, nada para actualizar")

    def controller_delete_user(self, apellido: str) -> None:
        user: Usuario = self.controller_read_user(apellido)
        user_index: int = None
        if user:
            for index, usuario in enumerate(self.db):
                if usuario.apellido == apellido:
                    user_index = index
                    break
            self.db.pop(user_index)
            print("se ha borrado el usuario")
            return
        print("no se pudo actualizar")
