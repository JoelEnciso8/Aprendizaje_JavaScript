"use strict";

// Object Literal, como concelarlos y no dejarlos modificar usando use strict

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true
};

// Object method 
console.log(Object.keys(producto));
// Nos devuelve el arreglo ,se utiliza la sintaxis para saber si el obj esta vacio, se usa pra validar 


console.log(Object.values(producto));
// Te devuelve solamente el valor del objeto

console.log(Object.entries(producto));

