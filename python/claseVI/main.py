from modules.manager import ManagerSqllite
from modules.pelicula import Pelicula

def main():
    manager = ManagerSqllite("pelis.db")   
    # peli = Pelicula("Rambo", 130, "accion", "1981-03-05")
    # peli2 = Pelicula("algo", 23, "caca", '1903-04-04')
    # manager.agregar_pelicula(peli2)
    
    for pelicula in manager.get_peliculas():
        print(pelicula)
        
    
    for pelicula in manager.get_una_pelicula('mbo'):
        print(pelicula)

if __name__ == "__main__":
    main()

    