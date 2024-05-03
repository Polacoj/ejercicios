//--------OBJETS-- tiene metodos y stributos--------

//----------------------OBJETO de manera LITERAL----------------------------
let fantasma = {
  //ATRIBUTOS---------
  name: "gasparyn",
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
    document.write(`<h2>Los fantasmas son: ${this.name}</h2>`);
    for (i of this.cantFantasmas) {
      document.write(`<li>fantasma: ${i} </li>`);
    }
  },
};