// usando dos promises, haceindo cosultas a nuestra API

// primer Promise 
function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando Clientes');

        setTimeout(() => {
           resolve('Los clientes fueron descargados'); 
        }, 2000);
    })
}


// segundo Promise 
function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando Pedidos...');

        setTimeout(() => {
           resolve('los Pedidos fueron descargados'); 
        }, 3000);
    })
}

const app =  async ()=>{
    try {

        const respuesta = await Promise.all([descargarNuevosClientes(),descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);

    } catch (error) {
        console.log(error);
    }
}

app()