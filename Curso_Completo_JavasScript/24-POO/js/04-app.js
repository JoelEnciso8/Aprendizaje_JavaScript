
class Input {
    
    // Private Field, 
    #nombre;

    constructor(nombre, saldo){
        this.#nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
     return  `Cliente: ${this.#nombre} tiene un saldo de: ${this.saldo}` 
    }

    static bienvenido(){ // Este metodo es inmutable
        return  `Welcome to the ATM ` 

    }

}

    const joel = new Input('Joel Steve Enciso Bravo', 9000);    
    console.log(joel);
    console.log(joel.mostrarInformacion());