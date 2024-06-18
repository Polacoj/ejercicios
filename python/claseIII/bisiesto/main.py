def bisiesto() -> None:
    x = int(input("ingrese el año: "))
    if (x % 400) == 0:
        return print(f"El año --> {x} es bisiseto..")
    if ((x % 4) == 0) and ((x % 100) != 0):
        return print(f"El año --> {x} es bisiseto..")
    else:
        return print(f"El año --> {x} No bisiseto..")
        

bisiesto()