
class Cliente2 {
    constructor(nombre, saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
     return  `Cliente: ${this.nombre} tiene un saldo de: ${this.saldo}` 
    }
    static bienvenido(){
        return  `Welcome to the ATM ` 

    }

}


const owenEnciso= new Cliente2('Owen Daniel Enciso Pereira', 70000);

// Instancias

console.log(owenEnciso);
console.log(owenEnciso.mostrarInformacion()); //  se sigue usando la notacion de punto para llamar el metodo (prototype)
console.log(Cliente2.bienvenido);








































// -----------------------------------------------

class Cliente {
    constructor(nombre, saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
}

// cuando son dos clases distintas debemos diferenciarlas 

const joelEnciso = new Cliente('Joel Steve Enciso Bravo', 50000);




