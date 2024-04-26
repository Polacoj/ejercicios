//----------Cliclo FOR----------------

let cantProductos = Number(prompt("Cantidad de productos: "));
let inicioLista = "<ul>";
let cuerpoLista = "";
let finLista = "</ul>";

for (let i = 0; i < cantProductos; i++) {
	let producto = prompt("Agregar producto >>>> ");
	let lista = `<li> ${producto} </li>`;
	cuerpoLista += lista;
}

document.write(inicioLista + cuerpoLista + finLista);



//--------Ciclo WHILE------------

let flag = true
cuerpoLista = ""

while (flag){
    let condicion = prompt("Agregar productos /NO(salir): ");
    if (condicion.toLowerCase() != 'no'){
        let producto = prompt("Producto: ");
        let lista = `<li> ${producto} </li>`;
        cuerpoLista += lista;
    }
    else {
        flag = false
    }

}
document.write(inicioLista + cuerpoLista + finLista)

