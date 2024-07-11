<<<<<<< HEAD
// Singleton, no te permite crear multiples instancias de una misma clase 

let instancia = null

class Persona {
    constructor(nombre, email){
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this
        }else{
            return instancia;
        }

    }
}



=======
// Singleton, no te permite crear multiples instancias de una misma clase 

let instancia = null

class Persona {
    constructor(nombre, email){
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this
        }else{
            return instancia;
        }

    }
}



>>>>>>> 50775bff6f499def3fc7ed2620274bc25383e927
const persona = new Persona('Joel','correo@correo.com');