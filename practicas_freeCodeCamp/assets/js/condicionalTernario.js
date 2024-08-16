function condicionalTernario(a, b) {
    return a == b
        ? "a y b son iguales"
        : a < b
        ? "a es menor que b"
        : "b es menor que a";
}

console.log("valores para 345 y 2356 ->", condicionalTernario(345, 2356));
console.log("valores para 7548 y 64 ->", condicionalTernario(7548, 64));
console.log("valores para 56 y 56 ->", condicionalTernario(56, 56));
