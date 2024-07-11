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



const persona = new Persona('Joel','correo@correo.com');