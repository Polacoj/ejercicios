let pizzas = [
    {
        nombre: "peperonni",
        precio: 10.34,
        delivery: true,
        extras: ["queso", "oliva", "pepperoni"],
    },
    {
        nombre: "muzzarella",
        precio: 8.44,
        delivery: true,
        extras: ["queso", "salsa de tomate", "oregano"],
    },
    {
        nombre: "ajo",
        precio: 5.44,
        delivery: true,
        extras: ["salsa de tomate", "oliva", "aceitunas", "ajo"],
    },
];

console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2].nombre, "-->", pizzas[2].delivery);
console.log(pizzas[1].nombre, "-->", pizzas[1].extras);

//--------OBJETO anidando OBJETO--------------------
let pastel = {
    nombre: "torta",
    precio: 34.75,
    relleno: "dulce de leche",
    ingregientes: {
        masa: {
            harina: "200 gr",
            manteca: "300 gr",
            leche: "500 cc",
            huevos: 2,
        },
        cobertura: {
            chococlate: "500 gr",
            huevos: 4,
            nueces: "100 gr",
        },
    },
};
console.log(pastel);
console.log(pastel.nombre);
console.log(pastel.relleno);
console.log(pastel.ingregientes.cobertura);
console.log(pastel.ingregientes.masa.huevos);

//----------ARREGLOS de OBJETOS-----------
let misPlantas = [
    {
        tipo: "flores",
        lista: ["rosas", "lirios", "jazmin"],
    },
    {
        tipo: "arboles",
        lista: ["pino", "cedro", "abedul"],
    },
];
let variable = misPlantas[0].lista[1]
console.log(variable)
variable = misPlantas[1].lista[2] //-----como variable ya esta creada no HAY que nombrar como tipo de varaible
console.log(variable)