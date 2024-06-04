function raizCuadrada(num) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(raizCuadrada(-1));
console.log(raizCuadrada(1565));
console.log(raizCuadrada(-56789));
