//factory - crea obj basados en ciertas condiciones  

class inputHTML {
    constructor(type,nombre){
        this.type = type;
        this.nombre = nombre;

    }

    input() {
        return `<input type="${this.type}" name="${this.nombre} id="${this.nombre}"> `;
    }
}


class HTMLfactory{
    crearElemento(tipo, nombre){
        switch (tipo) {
            case tipo:
                
                return new inputHTML(tipo,nombre);
        
            default:
                return;
        }
    }
}


const elemento = new HTMLfactory();

const inputText = elemento.crearElemento('text','nombre-cliente').input()
const inputEmail = elemento.crearElemento('telefono','nombre-telefono').input()
console.log(inputText);
console.log(inputEmail);

