function proximoAsalir(arreglo, elemento){
    arreglo.push(elemento) //---agrega al final del areglo el elemento-
    return arreglo.shift()  //---elimina el primer elemento del arregloy lo devuelve (por eso RETURN)
}
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8]

console.log("cadena original", JSON.stringify(arreglo))
console.log(proximoAsalir(arreglo, 12))
console.log("despues de eliminar el 1er. ", arreglo)