import csv

def asignacion_mail(nombre: str) -> dict:
    empresa = "Codo_a_Codo"
    return {
        "empresa": empresa,
        "mail_empresario": f"{nombre}@{empresa}.edu.gob.ar",
        "pass": "pass123!"
    }


opcion_si = ["si", "s", "yes", "y"]
base_datos = []

while True:
    usuario = {}
    usuario["nombre"] = input("Ingrese nombre: \n")
    usuario["apellido"] = input("Ingrese apellido: \n")
    data_retorno = asignacion_mail(usuario["nombre"])
    usuario = {**usuario, **data_retorno}

    guardar = input("guardar usuario? (si/no): \n")
    if guardar.lower() in opcion_si:
        base_datos.append(usuario)
        print("\t\t------usuario guardado------")
    else:
        print("\t\t------usuario NO guardado------")
        
    opcion = input("ingresar otro usuario? (si/no): \n")
    if opcion.lower() not in opcion_si:
        print("Saliendo .....")
        break
    
if base_datos:
    keys = base_datos[0].keys()
    with open('usuarios_sistema.csv', 'w', newline='') as dato_salida:
        dict_writer = csv.DictWriter(dato_salida, keys)
        dict_writer.writeheader()
        dict_writer.writerows(base_datos)
    print("Los usuarios han sido guardados en 'usuarios_sistema.csv'.")
else:
    print("No se guardaron usuarios en el archivo CSV.")

for usuario in base_datos:
    for key, value in usuario.items():
        print(f"{key}: {value}")


# keys = base_datos[0].keys()

# with open('usuarios_sistema.csv', 'w', newline='') as dato_salida:
#     writer = csv.DictWriter(dato_salida, keys)
#     writer.writeheader()
#     writer.writerows(base_datos)
