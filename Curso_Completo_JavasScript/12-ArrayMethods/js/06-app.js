const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Every

const todos = carrito.every(producto => producto.precio < 1000)
console.log(todos);

const todos2 = carrito.some(producto => producto.precio < 1000)
console.log(todos2);