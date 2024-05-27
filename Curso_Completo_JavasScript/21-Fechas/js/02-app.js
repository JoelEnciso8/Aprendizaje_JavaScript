// momentJS
const nuevoTime = new Date();

moment.locale('es');

console.log(moment().format('MMMM,Do, YYYY,h:ss,a')); //April 22nd 2024, 7:05:12 pm
console.log(moment().format('LLLL')); // Monday, April 22, 2024 7:05 PM