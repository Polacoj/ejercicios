let mochila = {
    color: "verde",
    tamaño: "mediano",
    contenido: ["botella de agua", "cuaderno", "lapiz"],
};
console.log(mochila);
mochila.uso = "colegio"; //AGREGAR atributo al objeto
mochila.contenido.push("plasticola"); //AGREGAR elemnto dentro de un ARRAY de un atributo
delete mochila.uso; // ELIMINA atributo del objeto
console.log(mochila);
//----------METODO para saber si un objeto tiene una propiedad o no------
console.log(mochila.hasOwnProperty("uso"));
console.log(mochila.hasOwnProperty("tamaño"));

function nombreQuimico(simbolo) {
    let quimico = {
        Li: "Litio",
        B: "Boro",
        S: "Azufre",
        Al: "Aluminio",
        Cl: "cloro",
        He: "Helio",
        H: "Hidrogeno",
    };
    return quimico[simbolo]; //el RETORNO va entre [] por ser un ARRAY
}
console.log(nombreQuimico("S"));
console.log(nombreQuimico("H"));

//----------Funcion para saber si un objeto tiene cierta propiedad-------
function objetoPropiedad(objeto, propiedad) {
    if (objeto.hasOwnProperty(propiedad)) {
        return "Propiedad: " + objeto[propiedad];
    } else {
        return "La propiedad no existe";
    }
}
console.log(objetoPropiedad(mochila, "color"));
console.log(objetoPropiedad(mochila, "lugar"));
