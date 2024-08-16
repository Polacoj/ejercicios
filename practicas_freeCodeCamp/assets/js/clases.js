class Transbordador {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

var satelite = new Transbordador("jupiter");
var satelite2 = new Transbordador("marte");

console.log(satelite.planeta);
console.log(satelite2.planeta);

//-----------Con el nuevo estandar mas sencillo---------
class Mascota {
    constructor(nombre, ladra) {
        this.nombre = nombre;
        this.ladra = ladra;
    }
}

let nuevaMascota = new Mascota("dash", "si");
let tuMascota = new Mascota("menta", "no");

console.log(nuevaMascota.nombre);
console.log(nuevaMascota.ladra);
console.log(tuMascota.nombre);
console.log(tuMascota.ladra);

//----------metodo GETTER y SETTER-------para reasignar un valor a parametro privado _ --------
class Libro {
    constructor(autor) {
        this._autor = autor;
    }

    get autor() {
        console.log(`${this._autor}, "getter"`)
        //------obtiene el autor solo para verlo--------
        return this._autor;
    }

    set autor(nuevoAutor) {
        console.log("setter")
        //---------reasigna un nuevo valor para la variable sin modificarla------
        this._autor = nuevoAutor;
    }
}

const miLibro = new Libro("anonimo");
console.log(miLibro.autor);

miLibro.autor = "nuevo Autor";
console.log(miLibro.autor);
