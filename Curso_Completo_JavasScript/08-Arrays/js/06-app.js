// Declarative Functions
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
    Precio: 1700,
    Stock: true,
 
};




let result;

result = [...carrito,producto,producto3]





console.table(result);