export  const  nombreCliente = 'Joel Steve Enciso Bravo'; // export es una palabra reservad q nos permite export la variable a otros archivos 
// para que la funcion salga se debe tener en cuenta el type module del HTML el cual nos dira si es posible o no realizarlo
export  const  dinero =  25000; 

// IIFE : Inmediately invoke function expression
// runs as soon as it is defined. 


export function mostrarinformacion(nombreCliente, dinero) {
    return ` Nombre Y apellido: ${nombreCliente}, Disponible para gastar: ${dinero}`
};


export function tieneSaldo( dinero) {
    if (dinero > 0) {
        console.log('Si tiene Saldo');
    } else {
        console.log('No tiene saldo');
    }
};

export class Cliente {
    constructor(nombreCliente, dinero){
        this.nombreCliente = nombreCliente;
        this.dinero = dinero;
    }
    mostrarinformacion(){
        return ` Nombre Y apellido: ${this.nombreCliente}, Disponible para gastar: ${this.dinero}`
    }
}

// declarando function por default 
// Solo se puede tener un export default en un archivo JS 
export default function nuevaFunction() {
    console.log('ExportDefault');
}


arr.forEach(element => {
    
});