(function () {
    let DB;
        const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded',()=>{

        conectarDB();
        formulario.addEventListener('submit', validarClient)



    })




        function validarClient(e) {
            e.preventDefault();

            // leer Todos los inputs 
            
            const nombre = document.getElementById('nombre').value;
            const correo= document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const empresa = document.getElementById('empresa').value;


            if (nombre === "" | correo === "" |telefono === "" |empresa === "" ) {
                imprimirAlerta('Informacion Invalida','error')

                return;  
            } 


            // creamos un objeto con la informacion 

            const cliente ={
                nombre,
                correo,
                telefono,
                empresa,
            }
            cliente.id = Date.now()
            crearcliente(cliente);
            }
            // creamos la funcion nuevoCliente

            function crearcliente(cliente) {
                const transaction = DB.transaction(('crm'), 'readwrite') 
                const objectStore = transaction.objectStore('crm');

                objectStore.add(cliente)

                transaction.onerror = function () {
                    console.log('Hubo un Error');
                }
                transaction.oncomplete = function () {
                    console.log('cliente Agregado');

                    imprimirAlerta('el cliente Se agrego correctamente ')

                    setTimeout(() => {
                        window.location.href = 'index.html'
                    }, 2000);
                }
            }



       



})();