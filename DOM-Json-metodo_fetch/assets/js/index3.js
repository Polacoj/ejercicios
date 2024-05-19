class Clientes {
  constructor({ id, first_name, last_name, email, gender, ip_address }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.ip_address = ip_address;
  }

  printDisplay() {
    let container = document.getElementById("container");
    let div = document.createElement("div");
    div.innerHTML = `
      <h2 class="estilo">${this.id}</h2>
      <h3>${this.first_name}</h3>
      <h3>${this.last_name}</h3>
      <details>
        <summary>Detalles extras</summary>
            ${this.email} | ${this.gender} | ${this.ip_address}
      </details>
      `;
    div.classList.add("border")
    container.appendChild(div);
  }
}

const API = "https://sheetdb.io/api/v1/bgbmciaf3yhsz"; //----desde la web------

const Datos = () =>
  fetch(API)
    .then((data) => data.json())
    .then((data) =>
      data.map((d) => new Clientes(d)).forEach((d) => d.printDisplay())
    )
    .then(console.info("informacion cargada"))
    .catch((captura) => console.log(captura));

let btn = document.querySelector("#btnLoading");
btn.addEventListener("click", Datos);

let Clear = document.getElementById("#btnClear");
btnClear.addEventListener("click", () => {
  let contenedor = document.getElementById("container");
  contenedor.innerHTML = "";
  console.info("borrado de informacion")
});
