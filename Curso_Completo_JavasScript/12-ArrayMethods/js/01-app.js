const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// Array Methods 


// Comprobando si el value exist in arr

meses.forEach((mes)=>{
    if (mes === "Enero") {
        console.log("Existe");
    }
})

// Includes solo funciona en Arr para validar
const result = meses.includes("Enero")
console.log(result);


const existe =  carrito.some((producto)=>{
    return producto.nombre === "Celular";
})
console.log(existe);console.log();