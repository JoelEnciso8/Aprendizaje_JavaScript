const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// filter ,te crea un nuevo arr con la condicon que estas validando

let result; 

    result = carrito.filter((producto)=>producto.precio > 400);
    result = carrito.filter((producto)=>producto.precio < 600)
    result = carrito.filter((producto)=>producto.nombre !== "Audifonos" )
    result = carrito.filter((producto)=>producto.nombre === "Audifonos" )

    console.log(result);