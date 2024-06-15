// Fetch API - la mas usada en JS 

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click',obtenerDatos); // creamos la funcion donde obtendremos los datos 

function obtenerDatos() {
    const url = 'data/datos.txt'; // la URL en  nuestro file donde buscaremos el file .txt

    fetch(url) // llamamos fetch y le decimos que traiga el URL 
    .then(respuesta =>{ // donde nos dara una respuesta con base a lo que solicitemos 
        console.log(respuesta);
        console.log(respuesta.status); // indica el stado actual del codigo, 200
        console.log(respuesta.type);
        return respuesta.text();
    })
    .then(datos =>{
        console.log(datos);  // nos devuelve la respuesta que esta en nuestro .txt
    })
    .catch(error =>{
        console.log(error);  // nos muestar posibles errores a la hora de ejcutar el .txt 
    })
}

//Una vez la terminal nos responde de que fue traido exitosamente la informacion el status nos mostrara el codigo que se vera, si aparece error 404 significa que debemos reformular la URL en la cual se esta ingresando 
