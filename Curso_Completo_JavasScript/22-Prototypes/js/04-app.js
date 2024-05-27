// heredando prototypes y constructores a otro tipo de obj

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

// Creamos la funcion Persona para poder heredar Cliente 

function Persona(nombre, saldo, telefono) {
    // como se hereda el constructor, Cliente, no es necesario agregar el constructor nuevamente
    Cliente.call(this, nombre, saldo) // usando Cliente.call este llama el constructor ya creado
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype); // ayuda a pasar el Cliente.prototype to Persona.prototype y traer los vavlores 
// Objet.create es una fn para crear el obejt de un prototype

Persona.prototype.constructor = Cliente;

// Instacia

const nombreJoel = new Persona('Joel Steve Enciso Bravo', 8000000,2345642);
    // console.log(nombreJoel);
    // console.log(nombreJoel.nombreClienteSaldoCliente());
    Persona.prototype.mostrarTel = function () {
      return  `El telefono de esta persona es ${this.telefono}`
   }
   
    console.log(nombreJoel.mostrarTel());