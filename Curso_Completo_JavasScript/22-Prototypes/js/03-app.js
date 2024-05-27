// Creando prototypes. lo cual nos ayuda a identificar el prototype de objeto que deseamos modificar o reslatar


function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

};

// iniciando Prototype
// una vez dentro del prototype este actuara como si fuera un metodo

Cliente.prototype.tipoCliente = function () {
   let tipo;

   if (this.saldo > 100000) {
    tipo = 'Gold';
   }else if (this.saldo > 50000) {
    tipo = 'Silver';
   }else{
    tipo = ' Mondao';
   }
   return tipo;

}

Cliente.prototype.nombreClienteSaldoCliente = function () {
    return `El nombre del cliente es ${this.nombre}, con el respectivo saldo de  ${this.saldo},  vendria siendo Cliente TIPO: ${this.tipoCliente()}`
}


Cliente.prototype.retirarSaldo = function (retirar) {
    this.saldo -= retirar;
}

// Instancia

const joelEnciso = new Cliente('Joel Steve Enciso Bravo', 80000);
console.log(joelEnciso.tipoCliente());
console.log(joelEnciso.nombreClienteSaldoCliente());
joelEnciso.retirarSaldo(20000);
console.log(joelEnciso.nombreClienteSaldoCliente());

// console.log(joelEnciso);



function Empresa (nombre, saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;

};

const resultado = new Empresa('SASS', 500,'Clases en linea');
console.log(resultado);