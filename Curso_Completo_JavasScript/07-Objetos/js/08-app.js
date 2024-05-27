"use strict";

// Object Literal, como concelarlos y no dejarlos modificar usando use strict

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true
};
// Object Method Freeze: nos ayuda a inmutar nuestro object. 

// Object.freeze(producto); 

// producto.Stock = false;
// delete producto.Nombre;
// console.log(producto);
// console.log(Object.isFrozen(producto));
