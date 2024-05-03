//---------------------------OBJETO como CLASE------------------
/**
 * Constructs a DiosesFantasmas object with the provided attributes.
 * @param {string} nombre - The name of the mythical god.
 * @param {number} edad - The age of the mythical god.
 * @param {string} poder - The power of the mythical god.
 * @param {Array} procedencia - The origins of the mythical god (default=[]).
 */
export class dioses {

  constructor(nombre, edad, poder, procedencia = []) {
    this.nombre = nombre;
    this.edad = edad;
    this.poder = poder;
    this.procedencia = procedencia;
  }

  /**
   * Adds a ghost to the list of ghosts.
   * @param {string} fantasma - The name of the ghost to be added.
   * @returns {string} - A message indicating that the ghost has been added.
   */

  agregarProcedencia(procedencia) {
    this.procedencia.push(procedencia);
    console.info("se agrego 1 elemento");
    return "cargado";
  }

  /**
   * Removes the last ghost from the list of ghosts.
   * @param {string} fantasma - The name of the ghost to be removed.
   * @returns {string} - A message indicating that the ghost has been removed.
   */

  borrarProcedencia() {
    this.procedencia.pop();
    console.warn("elmento borrado");
    return "borrado";
  }

  /**
   * Prints the list of ghosts on the web page.
   */

  mostrar() {
    document.write(`<h2>El nombre es: ${this.nombre}</h2>`);
    document.write(`<h2>La edad es: ${this.edad}</h2>`);
    document.write(`<h2>Su poder es: ${this.poder}</h2>`);
    document.write(`<ul>`);
    for (let i of this.procedencia) {
      document.write(`<li>Habitat: ${i} </li>`);
    }
    document.write(`</ul>`);
  }
}