// Event con el mouse

const nav = document.querySelector('.navegacion');


// Registrar evento
nav.addEventListener('mouseenter', () =>{
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'transparent'
});

nav.addEventListener('mouseout', () =>{
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'white'
});
