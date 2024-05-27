// bubling

const cardDiv = document.querySelector('.card');
const  infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click ', e => {
    e.stopPropagation(); //evita al evento que se propague a sus parientes y ancestros del elemento en el que el evento fue disparado.
    console.log('Click en card');
});

infoDiv.addEventListener('click ', e => {
    e.stopPropagation();
    console.log('Click en info');
});

titulo.addEventListener('click ', e => {
    e.stopPropagation();
    console.log('Click en titulo');
});



