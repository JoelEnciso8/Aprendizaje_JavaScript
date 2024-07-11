<<<<<<< HEAD

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
=======
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
>>>>>>> 50775bff6f499def3fc7ed2620274bc25383e927
