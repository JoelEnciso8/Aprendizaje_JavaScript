// /scopes
// const cliente ='Joel';

// function mostrarCliente() {
//     const cliente = 'Owen';
//     console.log(cliente);
// }

// console.log(cliente); // scope
// mostrarCliente()

// Closures
const obtenerCliente = () =>{
    const nombre = 'Owen Enciso';

    function muestraNombre() {
        return nombre
    }
    return muestraNombre;
}

const cliente = obtenerCliente();
cliente(nombre)



