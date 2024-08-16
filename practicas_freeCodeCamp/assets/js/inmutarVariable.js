let color = {
    "azul" : "azulazul",
    "negro" : "negronegro",
    "blanco" : "blancoblanco"
}

Object.freeze(color)    //-------para la funcion OBJECt y con el metodo FREEZE, se inmuta la variable
// color.azul = "grisgris"  ----------no se puede AGREGAR por ser ***inmutable*** 
// cualquier ACCION de los metodos no se realizan por estar FREEZADO


console.log(color)