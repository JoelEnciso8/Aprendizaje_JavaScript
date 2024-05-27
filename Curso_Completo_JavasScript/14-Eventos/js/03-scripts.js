// Evento Sobre los inputs

const search = document.querySelector('.busqueda');

    search.addEventListener('input', (e) =>{ // ejecuta el evento cuando precionas la tecla

        if (e.target.value === '') {
            console.log(('Invalid Data'));
        }

    });

    // Input es el mas usado para todos los eventos relacionados con el teclado exceptuando blur
    

