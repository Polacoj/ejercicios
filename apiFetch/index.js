const api_URL = "https://sheetdb.io/api/v1/bgbmciaf3yhsz";
const api_backup = "./api_buckup.Json";

fetch(api_URL)
    .then((respuesta) => {
        if (respuesta.status != 200) {
            console.log(
                "Tomado desde bachup API cuando el status es distinto de 200"
            );
            return fetch(api_backup).then((backupRespuesta) =>
                backupRespuesta.json()
            ); //Retorna fetch desde el backup
        }
        console.log("Tomado desde la API");
        return respuesta.json();
    })
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log({ error })); //------captura de ERROR
