// Prototype, Programacion Orientada A Objetos (Clasess)}


// Object Literal

const producto = {
    Nombre: "TV 55 Pulgadas",
    Precio: 200,
    Stock: true
};
// Los objetos agrupan todo en una sola variable... 

// Object constructor

function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

};

const cliente = new Cliente('Joel Enciso', 200000);

console.log(cliente);