// obteniendo respuesta para cargar JSON 

// JSON es similiara a un obj de js, tiene que estar dentro de un string, se conoce como una tech de trasnporte, para que se puedan leer en cualquier lenguaje


// cargando JSON 

const cargarJSON = document.querySelector('#cargarJSON');
cargarJSON.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json'
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(result =>mostrarHTML(result))
    .catch(error =>{
        console.log(error);
    })
}

// aplicando destructuring , la cual ya se encuentra en json , la informacion no aparecera en consola sino en el HTML 

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML =`
    
        <p> Empleado: ${nombre}</p>
        <p> Empleado: ${empresa}</p>
        <p> Empleado: ${id}</p>
        <p> Empleado: ${trabajo}</p>
    `
}