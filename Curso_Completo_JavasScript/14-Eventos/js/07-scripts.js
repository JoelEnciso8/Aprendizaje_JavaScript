const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e =>{
    if (e.target.classList.contains('titulo')) {
            console.log('Diste Click en titulo');
    }
    if (e.target.classList.contains('precio')) {
            console.log('Diste Click en precio');
    }
    if (e.target.classList.contains('card')) {
            console.log('Diste Click en card');
    }

});
// justificamos a que le estamos dando click, en este caso a cada class del html

