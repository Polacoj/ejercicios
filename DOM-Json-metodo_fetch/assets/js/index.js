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
    return this.descripcion.slice(0, 30) + "....."; //------entre () del SLICE es 0 de inicio y 20 hasta donde--------------
  }

  printDisplay() {
    let ul = document.getElementById("listaPrecios");
    let li = document.createElement("li");
    let texto = `${this.nombre} : ${
      this.precio
    } descripcion: <br> ${this.#transformText()} <br><br>`;
    li.innerHTML = texto;
    ul.appendChild(li);
    document.getElementById("listaPrecios").style.color = "red";
  }
}

const url = "/assets/js/listaPrecios.json"; //-----tener en cuenta donde arranca la ruta...SIEMPRE es por index.html y de ahi el arbol-----

fetch(url)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((e) => {
    let ul = document.getElementById("listaPrecios");
    let texto = `Error ${e}`;
    ul.innerHTML = texto;
  });
