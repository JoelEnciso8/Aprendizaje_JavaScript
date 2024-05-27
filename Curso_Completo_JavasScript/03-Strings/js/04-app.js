// Cortando espacios en blanco en Strings

const producto = "      Monitor 20 Pulgadas      "

console.log(producto);
console.log(producto.length);

// eliminar Espacio del inicio 
console.log(producto.trimStart());

// eliminar Espacio del final 
console.log(producto.trimEnd());
// concatenando metodos
console.log(producto.trimStart().trimEnd());