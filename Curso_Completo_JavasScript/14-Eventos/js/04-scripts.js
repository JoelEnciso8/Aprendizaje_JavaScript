// Evento Submit del formulario 

const form = document.querySelector('.formulario');
form.addEventListener('submit', validarForm);
  //agregamos el elemento por el cual se esta asignando el valor en este caso BUSCAR

// Funcion anonima

function validarForm(e) {
    e.preventDefault(); //ayuda a que la pagina no se recarge por default cuando se da buscar, los datos se envian a la URL 

    console.log('buscando API...');
    console.log(e.target.action);
}