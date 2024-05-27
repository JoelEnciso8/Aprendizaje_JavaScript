// Iteradores en Js 

function crearIterador(carrito) {
    let i = 0;
    return{
        siguiente: () =>{
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

                return{
                    fin,
                    valor
                }
        }
    }
}


const carrito =['Product1','Product2','Product3','Product4',];


const recorriendoCarrito = crearIterador(carrito)


console.log(recorriendoCarrito.siguiente());
console.log(recorriendoCarrito.siguiente());
console.log(recorriendoCarrito.siguiente());
console.log(recorriendoCarrito.siguiente());
console.log(recorriendoCarrito.siguiente());
console.log(recorriendoCarrito.siguiente());