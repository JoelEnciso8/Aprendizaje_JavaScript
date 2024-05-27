"use strict";

// Object Literal, como concelarlos y no dejarlos modificar usando use strict

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true
};

const medidas = {
    Peso: "2Kg",
    Medida: "8m"
};
// Object Method assign , es una manera de copiar obj sin reemplazar el valor original, solo agregando en el mismo objeto lo que le estamos pasando
// 

const result = Object.assign(producto,medidas)
console.log(result);

// Spread Operator  ... 

const result2 = {...medidas,...producto}
console.log(result2);
