import { Clientes } from "./cliente.js";

const URL = "/assets/js/clientePrecios.json";

const headers = {}; //------------por si tiene contraseña se coloca aca y luego se lo invoca junto al URL en el fetch-------

const Datos = () =>
  fetch(URL, { headers })
    .then((data) => data.json())
    .then((data) => data.map((d) => new Clientes(d)))
    .then((data) => {
      let valor =
        document.querySelector("#filtroPrecio").valueAsNumber || 10000000; //---el doble simbolo || significaca CORTOCIRCUITO cuando se carga un valor indefinido -----
      return data.filter((cliente) => cliente.precioLimpio < valor);
    })
    .then((data) => data.forEach((cliente) => cliente.printDisplay()))
    .catch((captura) => console.log({ captura }));

const clearData = () => {
  let container = document.getElementById("container");
  container.innerHTML = "";
};

let btn = document.querySelector("#carga");
btn.addEventListener("click", Datos);