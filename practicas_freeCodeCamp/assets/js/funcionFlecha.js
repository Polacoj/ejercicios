//      const fecha = function () {
//          return new Date();
//      };

const fecha = () => new Date();

console.log(fecha());

const concatenarPalabra = function (pal1, pal2) {
    return pal1.concat(pal2);
};

const concPal = (pal1, pal2) => pal1.concat(pal2);

console.log(concatenarPalabra("Primer palabra", "Segunda palabra"));
console.log(concPal([1, 3, 5], [8, 0, 4]));

//para funciones FLECHA cuando la funcion es de mas de una linea la operacion de la funcion se cierra entre llaves{}

const sumar = function (x, y) {
    let num = 23;
    return x + y + num;
};
//-----------la anterior usando FUNCION FLECHA------------
const sum = (x, y) => {
    let num = 10;
    return x + y + num;
};

console.log(sumar(5, 7));
console.log(sum(5, 7));

//---------funcion flecha con retorno reducida----------
const crearPersona = (nombre, edad, origen) => {
    return { nombre: nombre, edad: edad, origen: origen };
};

const crearPersona2 = (nombre, edad, origen) => ({ nombre, edad, origen }); //---Mas conciso que el anterior----------

//-----OBJETO con FUNCION como PARAMETRO se convierte en ***OBJETO con METYODO*** ---------------------------------
const persona = {
    nombre: "Alexis",
    presentarse: function () {
        return `Que tal mi nombre es ${this.nombre}`;
    },
};
console.log(persona.presentarse())

const persona2 = {      //---------Mas conciso con el nuevo standard-----------
    nombre: "Alexis",
    presentarse() {
        return `Que tal mi nombre es ${this.nombre}`;
    },
};
