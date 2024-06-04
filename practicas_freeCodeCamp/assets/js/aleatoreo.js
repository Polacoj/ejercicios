//---------nuemor aleatorio entre 0 y un cierto numero
function numeroAleatorio(maximo){
    return Math.floor(Math.random() * maximo)
}
for (let i = 0; i < 7; i++){
    console.log(numeroAleatorio(133))
}

//----------ALEATORIO entre cierto rango----------
function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min +1)) + min
}
for (let i = 0; i < 7; i++){
    console.log(aleatorio(3, 8))
}
