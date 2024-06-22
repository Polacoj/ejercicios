from module import Usuario
from module import ManagerUsuario 


def main():
    marcos: Usuario = Usuario("Marcos", "Jose")
    gabriela: Usuario = Usuario("Gabriela", "Sabattini")

    marcos.set_mail("CodoAcodo")
    gabriela.set_mail("algo_asi")

    crud = ManagerUsuario()
    crud.controller_save_user(marcos)
    crud.controller_save_user(gabriela)
    print(crud.db)
    crud.controller_delete_user("jose")
    print(crud)


if __name__ == "__main__":
    main()
