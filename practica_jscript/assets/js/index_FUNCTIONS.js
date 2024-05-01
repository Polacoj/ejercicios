let num1 = parseFloat(prompt("ingrese valor 1:"));
let num2 = parseFloat(prompt("ingrese valor 2:"));

//----------------FUNCION simple----------------
function suma(n1, n2) {
  return n1 + n2;
}
let resultado = suma(num1, num2);

document.write(
  `El resultado de la <b>SUMA</b> de ${num1} y ${num2}, es ${resultado}`
);
//
//
//
//
//-------------FUNCIONES como constantes -------------
const resta = function (n1, n2) {
  return n1 - n2;
}

document.write(
  `<br>El resultado de la <b>RESTA</b> de ${num1} y ${num2}, es ${resta}(
    num1,
    num2
  )}`
);
//
//
//--------------FUNCION ANONIMA O LAMBDA-------funcion flecha =>  ----------
/**
 * Writes a formatted message to the document.
 * @param {string} operacion - The operation name.
 * @param {number} valor - The value of the operation.
 * @returns {null} - Always returns null.
 */
const escribir = (operacion, valor) => {
  let textoImprimir = `</br>La operacion (con funcion anonima) ${operacion} es de ${valor}`;
  document.write("<h4>", textoImprimir, "</h4>");
  return null;
};

// escribir("suma", resultado);
//
//
//
//-------------ARROW FUNCTION o funcion flecha-------------
const mult = (n1, n2) => n1 * n2; //----funcion sin RETURN al ser de una linea si fuera de mas lineas hay que colocar RETURN
let multTotal = mult(num1, num2);
escribir("multiplicacion", multTotal);
//
//
//
const div = (n1, n2) => n1 / n2;
let divTotal = div(num1, num2);
escribir("Division", divTotal);
//
//
//
//
//------------CALLBAC con FUNCION MAIN-------------------
function main() {
  document.write(`<h2>Calculadora manual</h2>
    <p>Opciones de calculadora</p>
    <ol>
    <li>Suma</li>
    <li>Resta</li>
    <li>Multimplicacion</li>
    <li>Division</li>
    </ol>
    <hr></hr>`);
  let operacion = pedirOperacion();
  let n1 = pedirNumero();
  let n2 = pedirNumero();
  let nombreOperacion;
  let operacionMatematica;

  if (operacion == 1) {
    operacionMatematica = suma;
    nombreOperacion = "suma";
  } else if (operacion == 2) {
    operacionMatematica = resta;
    nombreOperacion = "resta";
  } else if (operacion == 3) {
    operacionMatematica = mult;
    nombreOperacion = "multiplicacion";
  } else if (operacion == 4) {
    operacionMatematica = div;
    nombreOperacion = "division";
  }

  let resultado = realizarCalculo(operacionMatematica, n1, n2);
  imprimir(nombreOperacion, resultado);
}

function pedirOperacion() {
  let operacion = prompt(`
    1--Suma
    2--Resta
    3--Multimplicacion
    4--Division
    sin operacion
    `);
  return operacion;
}

function pedirNumero() {
  let numero = prompt("Numero =");
  return Number(numero);
}

function realizarCalculo(fnCalculo, n1, n2) {
  return fnCalculo(n1, n2);
}

const imprimir = escribir;

main();
