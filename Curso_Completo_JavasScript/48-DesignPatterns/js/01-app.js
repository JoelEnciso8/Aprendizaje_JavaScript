// Class pattern

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Joel','email@email.com')
console.log(persona);