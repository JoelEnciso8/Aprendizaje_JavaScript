const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// findIndex

meses.forEach((mes,i)=> {
    if (mes === "Abril") {
        console.log(`${mes} Encontrado en el index ${i}`);
    }
})
  

// Encontrar el i de Abril 

const indice = meses.findIndex((mes)=> mes === "Abril");
console.log(indice);

// Indice de un arr de obj
const indexObj = carrito.findIndex(product => product.nombre === "Celular");
console.log(indexObj);