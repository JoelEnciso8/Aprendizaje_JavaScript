// Eliminando Elem de un arreglo

// Imperativa; Modifica la var original , sobre ella misma

const carrito = []



const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true,
 
};
const producto2 = {
    Nombre: "Celular",
    Precio: 1000,
    Stock: true,
 
};
const producto3 = {
    Nombre: "Keyboard",
    Precio: 1000,
    Stock: true,
 
};


// Agg elementos al final del arr
carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3)

// // Agg elementos al comienzo del arr
// carrito.unshift(producto3)




// // Eliminando ultimo elem de un arreglo
// carrito.pop()

// // Eliminando primer elem de un arreglos
// carrito.shift()


carrito.splice(1,1)


console.table(carrito);