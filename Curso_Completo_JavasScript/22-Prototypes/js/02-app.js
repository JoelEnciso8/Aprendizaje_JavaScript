// Por que son importantes los prototypes. 

// Object constructor

function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

};

const input = new Cliente('Joel Enciso', 200000);


{function resetClient(cliente) {
    const {nombre,saldo} = cliente;
    return `El Cliente ${nombre} Tiene un saldo de ${saldo}`
}}

console.log(resetClient(input));

function Empresa (nombre, saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;

};

const resultado = new Empresa('SASS', 500,'Clases en linea');
console.log(resetClient(resultado));