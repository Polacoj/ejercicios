function retornoMinimo(x, y) {
    return x < y ? x : y; //signo ? --> RETORNAR, signo : --> SINO
}

console.log("valores 2 y 8", retornoMinimo(2, 8));
console.log("valores 9 y 4", retornoMinimo(9, 4));
console.log("valores iguales 3",retornoMinimo(3, 3));
