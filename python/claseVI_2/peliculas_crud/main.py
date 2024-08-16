from modules.manager import ManagerSqllite
from modules.pelicula import Pelicula


def main():
    manager = ManagerSqllite("pelis.db")
    
    # flag:bool = True
    
    # while flag:
    #     option = int
    #     if option == 1:
    #         nombre:str = input("ingrese nombre de pelicula: \n")
    #         duracion:int = input("ingrese duracion: \n")
    #         genero:str = input("ingrese genero: \n")
    #         anio:str = input("ingrese nombre de pelicula: \n")
    #         pelicula = Pelicula(nombre, duracion, genero, anio)
    #         manager.agregar_pelicula(pelicula)
    #     else:
    #         option == 2:
                
        
   
        
    # peli = Pelicula("Rambo", 130, "accion", "1981-03-05")
    # peli2 = Pelicula("algo", 23, "caca", '1903-04-04')
    # peli3 = Pelicula("pelicula loca", 235, "locura", '1934-05-04')
    # peli4 = Pelicula("kit", 120, "automovilismo", '1986-10-02')
    # manager.agregar_pelicula(peli4)
    # manager.agregar_pelicula(peli4)

    # for pelicula in manager.get_peliculas():
    #     print(pelicula)

    # for pelicula in manager.get_una_pelicula('mbo'):
    #     print(pelicula)
    # manager.delete_query("Rambo")
    # manager.update_query("Los autos locos", "genero", "retro")
    manager.update_query("kit", "duracion", 60+6)

if __name__ == "__main__":
    main()
