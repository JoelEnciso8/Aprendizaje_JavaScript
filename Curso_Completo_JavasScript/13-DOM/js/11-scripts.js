// Ejemplos mas avanzados JS 

// Seleccionamos el boton 

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer')


btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    // agregamos un if para poder activar y desactivar el footer cuando este este desplegado.
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');  // la etiqueta remove lo quitara si esta activo 
        this.classList.remove('activo'); // this ayuda a mostrar la funcion que manda a llamar par mostrar el footer
        this.textContent = ' Idioma Y Moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';

    }      

    // la etiqueta add lo activa si esta desactivado
};

