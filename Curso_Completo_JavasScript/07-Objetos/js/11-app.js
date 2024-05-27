"use strict";

// Object Literal, como concelarlos y no dejarlos modificar usando use strict

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true,
    mostrarInfo: function () {
        console.log(`El producto ${this.Nombre} tiene un precio de ${this.Precio}`);
    }
};

const producto2 = {
    Nombre: "tablet",
    Precio: 400,
    Stock: false,
    mostrarInfo: function () {
        console.log(`El producto ${this.Nombre} tiene un precio de ${this.Precio}`);
    }
};
producto.mostrarInfo()
producto2.mostrarInfo()