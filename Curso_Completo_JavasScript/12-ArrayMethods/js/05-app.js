const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// for each 

let result = "";

carrito.forEach((producto,index)=>{
    if (producto.nombre === "Tablet") {
        result = carrito[index]
    }
});
    console.log(result);


    // .find

    const result2 = carrito.find(producto => producto.nombre === "Tablet")
    console.log(result2);