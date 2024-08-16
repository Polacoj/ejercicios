//--------------OPERADOR REST( ...argumento )-----------------

function miFunction(...args) {
    console.log(args, args.length);
}

miFunction(1, 5, 6, 7, 8);
miFunction([2, 3, 5], [4, 6, 6]);
miFunction("a", "h", "j", "k");
miFunction(["a", "c"], ["f", "b"], [4, 6]);

//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const algo = (...argumentos) => {
    return argumentos.reduce((a, b) => a + b, 0);
};

console.log(algo(3, 6, 7, 8));

//operador SPREAD permite a un elemento iterable tal como un arreglo o cadena ser separado por cada uno de los valores
const numero = [4, 6, 12];

function laFuncion(x, y, z) {
    return x + y + z;
}

console.log(
    `valores del array a individualizar ${numero} ->`,
    laFuncion(...numero)
);

//-------DESESTRUCTURACIÓN DE VARIABLE--------
const usuario = {
    nombre: "jose",
    apellido: "martinez",
    edad: 34,
};

const { nombre, apellido, edad } = usuario;
console.log(apellido, nombre);

//------------DESESTRUCTURACIÓN objetos anidados -----------
const peronaje = {
    mickey: {
        nacimiento: 1950,
        residensia: "USA",
        mail: "mickey@gmail.com",
    },
};
const {
    mickey: { nacimiento: persNacimiento, residensia: persResidencia, mail },
} = peronaje;
console.log(persNacimiento, persResidencia);

//------------DESESTRUCTURACIÓN de ARREGLOS -----------
var a;
var b;

[a, b] = [12, 45];
console.log("valor para la variable a ->", a);
console.log("valor para la variable b ->", b);

//para asignar un valor distinto dentro del arriglo a una variable, se dejan los espacios vacios por la variable que corresponde evitar
[a, , , , b] = [1, 4, 5, 67, 47, 78, 67];
console.log(a, b);

//----------------DESESTRUCTURACIÓN con el OPERADOR REST(los 3 .)---------------
var a;
var b;
var arreglo;

[a, b, ...arreglo] = [1, 3, 4, 3, "f", "d", "w"];
console.log(a);
console.log(b);
console.log(arreglo);

//--------------------DESESTRUCTURACIÓN de arrreglo eliminando posiciones--------
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function nuevoArreglo(arreglo) {
    const [, , , , ...arregloCorto] = arreglo;
    return arregloCorto;
}

console.log(nuevoArreglo(arregloInicial));

//------------DESESTRUCTURACIÓN pasar OBJETOS como ARGUMENTO ---------------
var perfilCliente = {
    nombre: "jose",
    apellido: "perez",
    edad: 45,
    nacionalidad: "argentino",
};

const actualizacionPerfil = (Perfil) => {
    const { nombre, apellido, edad, nacionalidad } = Perfil;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(nacionalidad);
};
actualizacionPerfil(perfilCliente);

//--------IGUAL al anterior pero mas secillo, pasando el objeto como parametro------------
const actualizacionPerfil2 = ({ nombre, edad }) => {
    console.log(nombre);
    console.log(edad);
};
actualizacionPerfil2(perfilCliente);

//--------SIMIL mas simple--------
const estadistica = {
    max: 234,
    media: 23.56,
    prom: 34,
    min: -34,
};

const medio = ({ max, min }) => (max - min) / 2;

console.log(`medio entre ${estadistica.max} y ${estadistica.min}`, medio(estadistica))
