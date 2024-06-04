function dato(arg) {
    let valor;
    switch (arg) {
        case 1:
            valor = "el valor es 1";
            break;
        case 2:
            valor = "el valor es 2";
            break;
        case 3:
        case 4:
        case 5:
            valor = "el valor fue de 3, 4 o 5";
            break;
        case 6:
        case 7:
        case 8:
            valor = "el valor fue de 6, 7 u 8";
            break;
        default:
            valor = "el valor fue distinto de 1 a 8";
            break;
    }
    return valor;
}
let numero = Number(prompt("elija valor"));
console.log(dato(numero));