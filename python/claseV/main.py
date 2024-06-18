class Usuario:
    # nombre:str #--------ATRIBUTOS de la CLASE------------
    # edad:int
    # sexo:str
    def __init__(self, nombre, edad, sexo): #-------CONSTRUCTOR de la CLASE----
        self.nombre = nombre    #-------ATRIBUTOS de INSTANCIA---------
        self.edad = edad
        self.sexo = sexo

    def saludar(self, saludo_esp:str) -> None: #--------Creacion de METODO-------
        print(f"{saludo_esp}, {self.nombre}, {self.edad}  !!!")

def main():
    marcos = Usuario("Marcos Jose", 45, "masculino")
    # marcos.nombre = "Marcos Jose"     #-------para usar con ATRIBUTOS de CLASE
    # marcos.edad = 45
    # marcos.sexo = "masculino"
    
    gabriela:Usuario = Usuario("Gabriela Sabattini", 34, "femenino")
    # gabriela.nombre = "Gabriela Sabattini"
    # gabriela.edad = 34
    # gabriela.sexo = "femenino"
    
    marcos.saludar("Hola como estan todos")
    gabriela.saludar("Soy Gaby sabattini")

if __name__ == "__main__":
    main()