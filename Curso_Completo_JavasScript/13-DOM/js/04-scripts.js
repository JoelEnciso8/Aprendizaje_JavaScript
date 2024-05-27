const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores especificos como CSS

const info = document.querySelector('.premium .info');
console.log(info);


// seleccionar el segundo card seria: utilizando las propiedaddes de Css como :nth-child(2)

const segundoCard =document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Query tambien permite seleccinar ID 

const form  = document.querySelector('.contenido-hero #formulario');
console.log(form);


const navegar = document.querySelector('nav');
console.log(navegar);