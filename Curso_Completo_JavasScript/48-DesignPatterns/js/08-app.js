//MEdiator Pattern The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact. 
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio ) =>{
        console.log(`Tenemos un articulo ${articulo} , Iniciamos con un precio de $ ${precio}`);

    },
    vendido: Comprador => {
        console.log(`vendido a ${Comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;

}
Comprador.prototype = {
    oferta: (cantidad,comprador) =>{
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}


function Subasta() {
    let compradores = {}

    return {
        registrar: usuario =>{
            compradores[usuario.nombre] =usuario;
            usuario.sala = this;
        }
    }


}



//Creamos el obj
const joel = new Comprador('Joel ');
const enciso = new Comprador('Enciso');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

//Tiene que registrarlos la subasta
subasta.registrar(joel)
subasta.registrar(enciso)
subasta.registrar(vendedor)


vendedor.oferta('Mustang 66', 500)

joel.oferta(350,joel)
enciso.oferta(500,enciso)
joel.oferta(560,joel)


vendedor.vendido('Joel ')