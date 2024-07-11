
// constructor Parent

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}


class Cliente extends Persona{
    constructor(nombre, email, empresa){
        this.empresa = empresa;
    }
}


const cliente = new Cliente('Joel','email@email.com','codigo con Joel')
console.log(persona);

const persona = new Persona('Juan','correo@corre.com')
