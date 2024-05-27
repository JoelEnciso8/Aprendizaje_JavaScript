"use strict";

// Object Literal, como concelarlos y no dejarlos modificar usando use strict

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true
};
// Object Method seal: nos ayuda a inmutar nuestro object. No se puden agregar ni eliminar propiedades
// Sin embargo nos permite modificar las existentes

Object.seal(producto);

producto.Nombre =" Arturo"
console.log(producto);
console.log(Object.isSealed(producto));