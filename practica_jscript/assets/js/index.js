console.info("texto que no va a apaecer---------");
console.clear("hola desde consola CLEAR"); //---------Borra todo lo anterior------------

console.warn("----hola desde consola WARNING");
console.log("----hola desde consola LOG");
console.info("----hola desde consola INFO");
console.error("-----mensaje de error ERROR");

let nombre = prompt("nombre a ingresar: ");
nombre = nombre + " algo concatenado";
console.info("nombre: " + nombre);
console.log("nombre---> ", nombre);

let algo;

algo = { dato: "nombre", dato2: "otro valor", dato3: "otro de otro valor" };
console.log(algo);
console.log(typeof algo);

//----------doble + valor incremental o decresciente - siempre es por 1 en base al inicial----------

let a, b;
a = 1;
b = 2;

a++;
b--;
b--;
a++;
console.log("valor de a-->", a, " valor de b---> ", b);

console.log(print(screen)); //---------------PRINT es para imprimir posta--------------
