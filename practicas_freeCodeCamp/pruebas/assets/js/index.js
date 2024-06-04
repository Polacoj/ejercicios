let contactos = [
    {
        nombre: "juan",
        apellido: "perez",
        numero: 64638390282,
        direccion: "av. de la nada 2133",
    },
    {
        nombre: "sebastian",
        apellido: "gonzalez",
        numero: 6423467744,
        direccion: "garcia 234",
    },
    {
        nombre: "jose",
        apellido: "marquez",
        numero: 8475930033,
        direccion: "av. hasta ahi nomas 422",
    },
    {
        nombre: "federico",
        apellido: "garcia",
        numero: 39995647,
        direccion: "de los pasillos 2309",
    },
];

function buscarContacto(nombre, valor){
    for (let i = 0; i < contactos.length; i++){
        if (contactos[i].nombre === nombre){
            return contactos[i][valor] || "el  nombre "+ nombre + " no existe"
        }
    }return "el valor buscado no existe"
}

console.log(buscarContacto("juan", "direccion"))
console.log(buscarContacto("jose", "apellido"))
console.log(buscarContacto("federico", "numero"))
console.log(buscarContacto("Javier", "direccion"))
console.log(buscarContacto("juan", "algo"))