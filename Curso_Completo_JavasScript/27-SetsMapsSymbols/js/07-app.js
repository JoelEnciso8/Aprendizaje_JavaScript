// Generator Js 
// Cuando una funcion tiene un * al inicio queire decir que esto es un generador 
// se identifican con yield como parametro

function *generandoCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito; // yield es la palabra reservada de la funcion generadora
    
        
    }

}
    const carrito = ['Item #1','Item #2','Item #3','Item #4'];
    const iteradorCarrito = generandoCarrito(carrito);
    console.log(iteradorCarrito.next().value);
    console.log(iteradorCarrito.next().value);