let res;

let choice = prompt("Indique tipo de calculo: ");
let num1 = parseInt(prompt("numero 1: "));
let num2 = parseInt(prompt("numero 2: "));

switch (choice) {
  case "suma":
    res = num1 + num2;
    break;

  case "resta":
    res = num1 - num2;
    break;

  case "multi":
    res = num1 * num2;
    break;
}

alert("resultado :" + res);
console.info(`resultado: ${res}`);