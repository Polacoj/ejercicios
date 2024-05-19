class Clientes {
  constructor({ first_name, last_name, email, precio }) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.precio = precio;
    this.precioLimpio = this.transformPrecio();
  }

  transformPrecio() {
    let cleanSymbols = this.precio.replace(/[$,]/g, "");
    return parseFloat(cleanSymbols);
  }

  printDisplay() {
    let container = document.getElementById("container");
    let div = document.createElement("div");
    div.classList.add("cliente");
    div.innerHTML = `
      <h2 class="estilo">${this.first_name}<br><br>${this.last_name}</h2>
      <details>
        <summary>Detalles extras</summary>
            ${this.email}
      </details>
      `;
    div.classList.add("border")
    container.appendChild(div);
  }
}

const URL = "/assets/js/clientePrecios.json";

const Datos = () =>
  fetch(URL)
    .then((data) => data.json())
    .then((data) => data.map((d) => new Clientes(d)))
    .then((data) => {
      let valor = document.querySelector("#filtroPrecio").valueAsNumber;
      return data.filter((cliente) => cliente.precioLimpio < valor);
    })
    .then((data) => data.forEach((cliente) => cliente.printDisplay()))
    .catch((captura) => console.log({ captura }));

const clearData = () => {
  let container = document.getElementById("container");
  container.innerHTML = "";
};

let btn = document.querySelector("#carga")
btn.addEventListener("click", Datos)