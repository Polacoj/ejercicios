//--------OBJETS-- tiene metodos y stributos--------

//----------------------OBJETO de manera LITERAL----------------------------
let fantasma = {
  //ATRIBUTOS---------
  nombre: "gasparyn",
  cantFantasmas: [],
  lugarTrabajo: { tierra: true, cielo: true, infierno: false },

  //METODOS--------
  agregarFantasma: function (fantasma) {
    this.cantFantasmas.push(fantasma);
    console.info("se agrego 1 elemento");
    return "cargado";
  },

  borrarFantasma: function () {
    this.cantFantasmas.pop();
    console.warn("elmento borrado");
    return "borrado";
  },
  mostrarFantasma: function () {
    document.write(`<h2>Los fantasmas son: ${this.nombre}</h2>`);
    for (i of this.cantFantasmas) {
      document.write(`<li>fantasma: ${i} </li>`);
    }
  },
};
//
//
//
//
//---------------------------OBJETO como CLASE------------------
class DiosesFantasmas {
  /**
   * Constructs a DiosesFantasmas object with the provided attributes.
   * @param {string} nombre - The name of the mythical god.
   * @param {number} edad - The age of the mythical god.
   * @param {string} poder - The power of the mythical god.
   * @param {Array} procedencia - The origins of the mythical god (default=[]).
   */
  reino = "cielo";

  constructor(nombre, edad, poder, procedencia = []) {
    this.nombre();
    this.edad();
    this.poder();
    this.procedencia();
  }

  /**
   * Adds a ghost to the list of ghosts.
   * @param {string} fantasma - The name of the ghost to be added.
   * @returns {string} - A message indicating that the ghost has been added.
   */

  agregarFantasma(fantasma) {
    this.cantFantasmas.push(fantasma);
    console.info("se agrego 1 elemento");
    return "cargado";
  }

  /**
   * Removes the last ghost from the list of ghosts.
   * @param {string} fantasma - The name of the ghost to be removed.
   * @returns {string} - A message indicating that the ghost has been removed.
   */

  borrarFantasma() {
    this.cantFantasmas.pop();
    console.warn("elmento borrado");
    return "borrado";
  }

  /**
   * Prints the list of ghosts on the web page.
   */

  mostrarFantasma() {
    document.write(`<h2>Los fantasmas son: ${this.nombre}</h2>`);
    for (i of this.cantFantasmas) {
      document.write(`<li>fantasma: ${i} </li>`);
    }
  }
}


