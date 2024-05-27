// Aprendiendo a cambiar valores con Replace a String

const producto = "Monitor 20 Pulgadas"

console.log(producto);

// Metodo replace() 
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo ultra HDMF'));

// Metodo slice para cortar 
console.log(producto.slice(0,10));

// alternativa a slice, susbtring; cumple la misma funcion sin embargo substring modifica la funcion 

console.log(producto.substring(0,10));


const user = "Joel";

console.log(user.substring(0,2));
console.log(user.charAt(0));