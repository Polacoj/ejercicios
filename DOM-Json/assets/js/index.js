import listaPrecios from "./listaPrecios.json" assert { type: "json" };

/*
 * @Polacoj
 */

class Listado {
  constructor({ id, nombre, precio, descripcion }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
  }

  //------metodo de acceso a la CLASE para su modificacion------------
  #transformText() {
    return  this.descripcion.slice(0, 30) + "....."; //------entre () del SLICE es 0 de inicio y 20 hasta donde--------------
  }

  printDisplay() {
    let ul = document.getElementById("listaPrecios");
    let li = document.createElement("li");
    let texto = `${this.nombre} : ${this.precio} descripcion: <br> ${this.#transformText()} <br><br>`;
    li.innerHTML = texto;
    ul.appendChild(li);
    document.getElementById("listaPrecios").style.color = "red";
  }
}

// let objetoListaPrecios = listaPrecios.map((l) => new listado(l));
// objetoListaPrecios.forEach((l) => l.printDisplay());

//--------- igual al anterior pero concatenado para simplificar codigo---------

let objetoListaPrecios = listaPrecios
  .map((l) => new Listado(l))
  .forEach((l) => l.printDisplay());