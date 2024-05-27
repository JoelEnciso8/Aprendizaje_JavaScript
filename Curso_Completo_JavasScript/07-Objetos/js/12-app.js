"use strict";

// Object Literal, como concelarlos y no dejarlos modificar usando use strict

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true
};

// Object constructor

function Producto(Nombre,precio) {
    this.Nombre = Nombre;
    this.Precio = precio;
    this.Stock = true;
}

const producto2 = new Producto("Monitor la megaMonda",900)
console.log(producto2);