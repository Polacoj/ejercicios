// console.info("texto que no va a apaecer---------");
// console.clear("hola desde consola CLEAR"); //---------Borra todo lo anterior------------

// console.warn("----hola desde consola WARNING");
// console.log("----hola desde consola LOG");
// console.info("----hola desde consola INFO");
// console.error("-----mensaje de error ERROR");

// let nombre = prompt("nombre a ingresar: ");
// nombre = nombre + " algo concatenado";
// console.info("nombre: " + nombre);
// console.log("nombre---> ", nombre);

// let algo;

// algo = { dato: "nombre", dato2: "otro valor", dato3: "otro de otro valor" };
// console.log(algo);
// console.log(typeof algo);

// //----------doble + valor incremental o decresciente - siempre es por 1 en base al inicial----------

// let a, b;
// a = 1;
// b = 2;

// a++;
// b--;
// b--;
// a++;
// console.log("valor de a-->", a, " valor de b---> ", b);

// console.log(print(screen)); //---------------PRINT es para imprimir posta--------------

//--------------Control de flujo if---------

let usuario = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");
let pwd = prompt("Ingrese cpntraseña: ");
const pwd_master = "admin1234";

// if (edad > 18) {
// 	if (pwd == pwd_master) {
// 		document.write(
// 			"<h1> --->> Usuario Correcto....Bienvenido</h1>"
// 		);
// 	} else {
// 		document.write(
// 			"<h1> ---->>> Usuario inexistente....SALIENDO...</h1>"
// 		);
// 	}
// } else {
// 	console.warn("intento de ingreso menor de edad");
// 	document.write(
// 		'<span style="font-size: 36px; font-weight: 600; font-style: italic">' +
// 			usuario +
// 			"</span>" +
// 			'<h1 style= "color: red; text-shadow: 2px 4px blue"> --------Menor de edad no puede ingresar------</h1>'
// 	);
// }
//---------------------lo mismo que ARRIBA pero mas sencillo----------------

// if (edad >= 18 && pwd == pwd_master) {
// 	document.write("<h1> --->> Usuario Correcto....Bienvenido</h1>");
// } else {
// 	document.write("<h1> ---->>> Usuario inexistente....SALIENDO...</h1>");
// }
//-------aun mas sencillo----------Usando una comprobacion logica en una variable------

const condicion = (edad >= 18) && (pwd == pwd_master)

// if (!condicion) {
// 	document.write("<h1> --->> Usuario Incorrecto....SALIENDO</h1>");
// }

//-------------mas simple aun----con operadores ternarios ----?===SI -----:===SINO------

condicion
	? document.write("<h1> --->> Usuario Correcto....Bienvenido</h1>")
	: ocument.write("<h1> --->> Usuario Incorrecto....SALIENDO</h1>");