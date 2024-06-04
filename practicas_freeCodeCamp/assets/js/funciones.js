function mostrarMensaje() {
    console.log("Hola Mundo !!!!!");
}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

//------------------FUNCIONES CON ARGUMENTOS---------------------------
function division(num1, num2) {
    let division = num1 / num2;
    console.log(
        "El resultado  de la division entre",
        num1,
        "y",
        num2,
        "es :",
        division
    );
}
let n = 7;

division(5, 9);
division(n, 1);
division(23, n);
division(5, 56);

//---------------FUNCION CON RETORNO DE VALOR-------------
function suma(a, b){
    console.log("suma con retorno de valor")
    return a + b
}
let s = suma(5, 8)
console.log(s)

//---------------FUNCION CON RETORNO DE VALOR undefind (sin return-------------
function resta(a, b){
    console.log(a - b);
}
console.log(resta(4, 7));