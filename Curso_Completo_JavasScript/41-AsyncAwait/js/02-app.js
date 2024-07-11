

function descargarClientes() {
    // resolve cuando el Promise se cumple, y reject cuando esta no se cumple, se pasan estos dos parametros
    return new Promise ((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El list se descargó correctamente ')
            }else{
                reject('Error en la conexion')
            }
        }, 2000);

    })
}

// Async Await en funcion expresada
 const ejecutar = async ()=> {
    try {
        console.log(1+2);
        const respuesta = await descargarClientes();
        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}
ejecutar()