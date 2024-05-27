const producto = "Monitor 20 Pulgadas"

// .repeat te permite repetir una String, debes pasar un numero entero 

const text = ' Promocion'.repeat(2);

console.log(text);

console.log(` ${producto}, ${text} !!! `);

// .split, te ayuda a dividir un String
const activity = "Aprendiendo a Prgramar de manera empirica"
console.log(activity.split(" "));

const hobbies = "leer, Caminar, haceer, Comer, Culiar, beber, Familia, computador, javascript, Berboso";
console.log(hobbies.split(", "));

// para resaltar un Hashtag #
const tweet = "Yo se que llegare lejos en esta vida. #SoyLaMonda!"
console.log(tweet.split("#"));