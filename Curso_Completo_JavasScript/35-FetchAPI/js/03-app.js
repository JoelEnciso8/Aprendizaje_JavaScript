// cargar un JSON que es un arreglo consultando e imprimiendo un array 


// document.addEventListener('DOMContentLoaded',obtenerDatos)

const cargarJSONarrBtn = document.querySelector('#cargarJSONArray');
cargarJSONarrBtn.addEventListener('click',obtenerDatos);

// creamos la fn obtenerDatos
function obtenerDatos() {
    
    const url = 'data/empleados.json';

    fetch(url)
    .then(response => response.json())
    .then(result => mostrarHTML(result));
}

// creamos la fn que nos mostrara la info en el html, recorriendo cada uno del array con foreach el cual nos dara result exacto del JSON array que tenemos 

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(element => {
        const{empresa, id, nombre, trabajo} = element;
        html +=`
        <p> Empleado: ${nombre}</p>
        <p> Empresa: ${empresa}</p>
        <p> Numero ID: ${id}</p>
        <p> Trabajo: ${trabajo}</p>
        `
    });
    contenido.innerHTML =html;
}