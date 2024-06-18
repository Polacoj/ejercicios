usuario = {}
lista = []
flag = True

while flag:
    usuario["nombre"] = input("ingrese nombre:\t")
    usuario["apellido"] = input("ingrese apellido:\t")
    print(usuario)
    opcion = input("ingrese opcion para continuar o salir:\t")
    if opcion.lower() == 'si' or opcion.lower() == 's':
        print("seguimos ingresando")
    else:
        lista.append(usuario)
        print("saliendo")
        flag = False
print(lista)
