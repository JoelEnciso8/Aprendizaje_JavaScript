
class Input {
    constructor(nombre, saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
     return  `Cliente: ${this.nombre} tiene un saldo de: ${this.saldo}` 
    }

    static bienvenido(){ // Este metodo es inmutable
        return  `Welcome to the ATM ` 

    }

}


/*Herencia Creamos la class la cual deseamos heredar a Input
 The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.*/  
 
class Empresa extends Input{
    
    // El constructor se puede reescribir para que tome el valor o los valores deseados
        constructor(nombre, saldo, telefono,categoria){
           super( nombre,saldo); // Si el constructor ya existe en la Clase padre usamos la etiqueta llamada SUPER( arguments)
            this.telefono=telefono;
            this.categoria=categoria;
        }

        static bienvenido(){ // Este metodo es inmutable
            return  `Welcome to the ATM , Please make a selection` 
    
        }

        mostrarInformacion(){
            return  `Cliente: ${this.nombre}, numero de telefono No: ${this.telefono} el cual se dedica a ${this.categoria} tiene un saldo de: ${this.saldo}` 
           }

}

const enciso= new Input('Isabella Enciso', 70000); //Clase padre
const empresa = new Empresa('Crane WorldWide logistics',1010000,3043987834, 'International Trade') // Herencia 




// Instancias

console.log(Empresa.bienvenido()); 
console.log(Input.bienvenido());

console.log(empresa);
console.log(empresa.mostrarInformacion()); // para llamar la herencia se manda a llamar el const creado