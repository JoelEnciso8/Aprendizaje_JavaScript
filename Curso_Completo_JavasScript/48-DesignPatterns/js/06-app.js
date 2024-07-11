//mixin pattern 

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email,empresa){
        this.nombre = nombre;
        this.email = email;
    }
}




const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Person: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Nombre Person: ${this.nombre}`);
    }
}

//Add fn personas a la  Class persona

Object.assign(Persona.prototype,funcionesPersona)

//llamamos la class
const persona = new Persona('Owen','correo@correo.com');
const cliente = new Cliente('Joel','correo@correo.com','sofCodigo');


//llamar en console 
console.log(cliente);
cliente.mostrarInformacion()
cliente.mostrarNombre()

console.log(persona);
persona.mostrarInformacion()