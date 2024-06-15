// cargando Una API 

const cargarAPI = document.querySelector('#cargarAPI');
cargarAPI.addEventListener('click',obtenerDatos);


function obtenerDatos() {
    const url = 'https://picsum.photos/list'
    fetch(url)
    .then(response => response.json())
    .then(result => mostrarHTML(result))
}


function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';
    
    datos.forEach(element => {
        const {author, post_url} = element; // destructuring the code in order to be read
// Para ver las imagenes es recomendable agregar  la etiqueta <a> anchor , que nos permite crear un enlace de una pagina de internet, archivos etc 
        html += `
         <p> Author: ${author}</p>
        <a href="${post_url}" target="_blank">Ver Imagen </a>               
        `
    });

    contenido.innerHTML = html
}