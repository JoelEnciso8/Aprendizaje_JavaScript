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
Object.assign(Cliente.prototype,funcionesPersona)



//llamamos la class
const cliente = new Persona('Owen','correo@correo.com');

//llamar en console 
console.log(cliente);
cliente.mostrarInformacion()
cliente.mostrarNombre()


