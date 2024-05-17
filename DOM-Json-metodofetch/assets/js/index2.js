/*
 * @Polacoj
* 
 */

class Listado {
  constructor({ id, first_name, last_name, email, gender, ip_address }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.ip_address = ip_address;
  }

  printDisplay() {
    let ul = document.getElementById("listaPrecios");
    let li = document.createElement("li");
    let texto = `ID: ${this.id} <br><br> Nombre: ${this.first_name} Apellido: ${this.last_name}, IP: ${this.ip_address}<br><br>`;
    li.innerHTML = texto;
    ul.appendChild(li);
  }
}

const API = "https://sheetdb.io/api/v1/bgbmciaf3yhsz";

fetch(API)
  .then((data) => data.json())
  .then((data) => data.map((d) => new Listado(d)).forEach((d) => d.printDisplay()))
  .catch((e) => {
    let ul = document.getElementById("listaPrecios");
    let texto = `Error ${e}`;
    ul.innerHTML = texto;
  });
//   Explanation:
//   Fetch API Call: fetch(API) starts the fetch request.
//   First .then(): The first .then() receives the response object from the fetch call and calls .json() to parse the JSON data.
//   Second .then(): The second .then() receives the parsed JSON data and processes it:
//   .map((d) => new Listado(d)) creates a new Listado object for each item in the data array.
//   .forEach((item) => item.printDisplay()) calls the printDisplay method on each Listado object.
//   Third .then(): This logs a success message to the console. This .then() block could be omitted if not needed.
//   .catch(): If any error occurs, it catches the error, gets the ul element by its ID, and updates its inner HTML with the error message.


  //---------metodo ASYNC/AWAIT-----generado por IA---------



//   // Assuming 'Listado' class has a 'printDisplay' method and 'API' is a defined constant

// // Improved fetch with async/await and try/catch for error handling
// async function fetchDataAndDisplay() {
//     try {
//       const response = await fetch(API);
//       const dataList = await response.json();
      
//       // Assuming 'printDisplay' is a method of 'Listado' instances that handles its own display logic
//       dataList.forEach(data => {
//         const listado = new Listado(data);
//         listado.printDisplay();
//       });
  
//       // If you need to log the dataList, do it directly after fetching and processing it
//       console.log(dataList);
//     } catch (error) {
//       // More robust error handling
//       displayError(error);
//     }
//   }
  
//   // Separate function for error display
//   function displayError(error) {
//     const ul = document.getElementById("listaPrecios");
//     ul.textContent = `Error: ${error}`; // Using textContent for security reasons
//   }
  
//   // Call the function to fetch data and display
//   fetchDataAndDisplay();