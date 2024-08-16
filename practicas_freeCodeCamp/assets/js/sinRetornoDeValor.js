function raizCuadrada(num) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(raizCuadrada(-1));
console.log(raizCuadrada(1565));
console.log(raizCuadrada(-56789));

let numero = "111001101"
let numero2 = "1836749"

console.log("a Binario 111001101-->", parseInt(numero, 2))
console.log(parseInt(numero2))
