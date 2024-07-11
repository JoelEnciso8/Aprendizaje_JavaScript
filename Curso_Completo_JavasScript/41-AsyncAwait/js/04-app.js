
 const URL = 'https://picsum.photos/list';

 document.addEventListener('DOMContentLoaded', obtenerDatos);

//  function obtenerDatos() {
//     fetch(URL)
//         .then(respuesta => respuesta.json())
//         .then(resultado => console.log(resultado))
//         .catch(error => console.log(error))
//  }



//  usando async await
async function obtenerDatos() {

    try {
        const respuesta = await fetch(URL);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error );
    }
}