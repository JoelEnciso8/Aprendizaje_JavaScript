
// Object Literal

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true
};
// Los objetos agrupan todo en una sola variable... 










// console

// DOT sintaxis
// console.log(producto.Nombre);

// destructuring code object, se usa llaves 

const {Nombre, Precio,Stock} = producto
console.log(Nombre);
console.log(Precio);
console.log(Stock);