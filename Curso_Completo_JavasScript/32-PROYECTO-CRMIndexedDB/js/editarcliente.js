//
(function () {
    let DB;
    
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')


    const form = document.querySelector('#formulario')


    document.addEventListener('DOMContentLoaded',()=>{
        conectarDB()
        

        form.addEventListener('submit', actualizarClient)

        // verificar el ID de la URL 

        const parametrosURL = new URLSearchParams(window.location.search);        
        const idCliente = parametrosURL.get('id');

        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 1000);


        }

    });
    
    function actualizarClient(e) {
        e.preventDefault();

        if (nombreInput.value === "" || emailInput.value === "" || empresa.value === ""||telefono.value === ""  ) {
            imprimirAlerta('Todos los campos son obligatorios','error');
            return;
        }

    }

    function obtenerCliente(id) {
        const transaction = DB.transaction('crm','readonly');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess =function (e) {
            const cursor = e.target.result;
            
            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    llenarForm(cursor.value)

                }
                cursor.continue();
            }
        }
    
    }

    function llenarForm(datosCliente) {
        const { nombre, correo , telefono, empresa } = datosCliente;
        console.log('Test',datosCliente);
            nombreInput.value = nombre;
            emailInput.value = correo;
            telefonoInput.value =telefono;
            empresaInput.value = empresa;

    }

    function conectarDB() {
        const abrirContent = window.indexedDB.open('crm',1);

        abrirContent.onerror = function () {
            console.log('one Error');
        };

        abrirContent.onsuccess =function () {
            DB = abrirContent.result;
        }
    }



})();