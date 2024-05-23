export class Clientes {
  constructor({ first_name, last_name, email, precio }) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.precio = precio;
    this.precioLimpio = this.#transformPrecio();
  }

  #transformPrecio() {
    let cleanSymbols = this.precio.replace(/[$,]/g, "");
    return parseFloat(cleanSymbols);
  }

  removeDisplay() {
      this.div.remove();
      console.log("eliminado")
    }
  // }
  
  printDisplay() {
    let container = document.getElementById("container");
    this.div = document.createElement("div");
    this.div.classList.add("cliente");
    this.div.innerHTML = `
        <button class="cerrar">X</button>
        <h2 class="estilo">${this.first_name}<br><br>${this.last_name}</h2>
        <details>
          <summary>Detalles extras</summary>
          ${this.precio}    
          ${this.email}
        </details>
        `;
    this.div.classList.add("border");
    container.appendChild(this.div);

    const closeBtn = this.div.querySelector(".cerrar");
    closeBtn.addEventListener("click", () => this.removeDisplay());
  }
}
