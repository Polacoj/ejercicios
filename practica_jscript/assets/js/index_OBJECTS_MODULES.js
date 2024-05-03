import { dioses } from "../modules/dioses.js";

const alexis = new dioses("juan", 1500, ["dormir a humanos"]);
const leonel = new dioses("jose", 12000, "hacer reir", ["babilonia"]);
const paola = new dioses("cristina", 190, "genera equilibrio", [
  "argentinisima",
  "el infierno",
]);
const tomas = new dioses("cocoroco", 45030, "la destruccion");

console.log(alexis);

document
.getElementById("boton")
.addEventListener("click", () => paola.mostrar())
