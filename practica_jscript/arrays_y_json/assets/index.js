console.log("hola mundo !!!!");
/**
 *@Polacoj
 *@id = de manera automatica
 *@name = string
 *@detail = string
 *@precio = number
 **/

class productos {
  constructor(name, detail, precio) {
    this.id = self.crypto.randomUUID();
    this.name = name;
    this.detail = detail;
    this.precio = precio;
    console.info(`producto creado ${this.id}`);
  }

  readId() {
    return this.id;
  }

  viewPrecio() {
    return this.precio;
  }
  printProduct() {
    return `
    <li>id: ${this.id}, nombre: ${this.name}, precio: ${this.precio}</li>;
    `;
  }
}

class empresa {
  constructor(name = "Bandini", datbase = []) {
    this.name = name;
    this.datbase = datbase;
  }
  getAllProduct() {
    document.write(`<p>${this.name}</p>`);
    document.write(`<p>${this.datbase.length}</p>`);

    if (this.datbase.length == 0) {
      document.write("No disponemos de productos");
    }
    for (let i of this.datbase) {
      i.printProduct();
    }
  }

  prinAllProduct() {
    let producto_text = " ";
    for (let i of this.datbase) {
      producto_text += i.printProduct();
    }
    return ` <ul> ${producto_text}</ul> `;
  }

  getProduct(name) {
    // document.write(`${this.datbase.find(this.name)}`)
    return this.datbase.find((producto) => producto.id == name);
  }

  lastProduct() {
    return this.datbase.length(-1); //------39:42-------------
  }

  lastEraseProduct() {
    this.datbase.pop();
    return console.warn("elemento borrado");
  }

  inserProduct(producto) {
    this.datbase.push(producto);
    return console.info("producto agregado");
  }

  deleteProduct(name) {
    this.datbase = this.datbase.filter((producto) => producto.name != name);
  }
}

function main() {
  let baseDatoInicial = [
    {
      nombre: "Ostrich - Fan Fillet",
      descripcion: "Accounting",
      precio: 48915.3,
    },
    {
      nombre: "Sausage - Meat",
      descripcion: "Marketing",
      precio: 91747.81,
    },
    {
      nombre: "Yogurt - Cherry, 175 Gr",
      descripcion: "Sales",
      precio: 91558.75,
    },
    {
      nombre: "Chick Peas - Dried",
      descripcion: "Business Development",
      precio: 64051.67,
    },
    {
      nombre: "Beef - Ox Tongue, Pickled",
      descripcion: "Engineering",
      precio: 93822.92,
    },
    {
      nombre: "Rum - Spiced, Captain Morgan",
      descripcion: "Sales",
      precio: 59234.31,
    },
    {
      nombre: "Dehydrated Kelp Kombo",
      descripcion: "Accounting",
      precio: 94473.97,
    },
    {
      nombre: "Vinegar - Balsamic, White",
      descripcion: "Training",
      precio: 61505.41,
    },
    {
      nombre: "Sauce - Thousand Island",
      descripcion: "Legal",
      precio: 22769.15,
    },
    {
      nombre: "Steam Pan - Half Size Deep",
      descripcion: "Human Resources",
      precio: 79521.92,
    },
  ];

  let napolitana = new productos(
    "pizza napolitana",
    "tomate, ajo y oliva",
    150000
  );

  let nuevoProducto = [];
  nuevoProducto = baseDatoInicial.map(
    (pJason) => new productos(pJason.nombre, pJason.descripcion, pJason.precio)
  );

  console.log(nuevoProducto);
  let roquefort = new productos("pizza roquefort", "queso y roquefort", 20000);
  let kentucky = new empresa("kentucky");
  let bandini = new empresa("bandini");

  kentucky.inserProduct(roquefort);
  kentucky.inserProduct(napolitana);
  kentucky.getAllProduct();

  bandini.inserProduct(roquefort);
  bandini.getAllProduct();

  nuevoProducto.forEach((p) => kentucky.inserProduct(p));

  let main = document.getElementById("aplicacion");
  let li = document.createElement("li");
  // li.innerText = "harina";
  // li.innerHTML = napolitana.printProduct();
  // li.innerHTML = roquefort.printProduct();
  // main.appendChild(li);

  main.innerHTML = kentucky.prinAllProduct();
  // main.innerHTML = bandini.prinAllProduct()

  
  console.log(li);
}

main();
