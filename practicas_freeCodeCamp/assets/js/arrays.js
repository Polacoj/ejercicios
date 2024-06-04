let listaCompras = [
  "leche",  //-----------------------------------0
  "fiambre", //----------------------------------1
  "queso",  //-----------------------------------2
  ["papa", "zapallo", "tomate"], //--------------3-[0-1-2]
  ["vino", "cereveza", "licor de pera"], //------4-[0-1-2]
];

console.log(listaCompras)
console.log(listaCompras[1])
console.log(listaCompras[2][1])
console.log("voy a comprar" + " 3 "+ listaCompras[2] + " y 3kg. de "+ listaCompras[3][0])
console.log("voy a comprar", listaCompras[4][1], "y 3kg. de ", listaCompras[3][2])