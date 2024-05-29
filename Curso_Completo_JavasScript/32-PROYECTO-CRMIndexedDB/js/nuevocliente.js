(function () {
    let DB;
        const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded',()=>{

        conectarDB();
        formulario.addEventListener('submit', validarClient)

    })


    function conectarDB() {
        const abrirContent = window.indexedDB.open('crm',1);

        abrirContent.onerror = function () {
            console.log('one Error');
        };

        abrirContent.onsuccess =function () {
            DB = abrirContent.result;
        }
    }


        function validarClient(e) {
            e.preventDefault();

            // leer Todos los inputs 
            
            const nombre = document.getElementById('nombre').value;
            const correo= document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const empresa = document.getElementById('empresa').value;


            if (nombre === "" | correo === "" |telefono === "" |empresa === "" ) {
                imprimirAlerta('Error','error')

                return;  
            } 

        }
            function imprimirAlerta(mensaje,tipo) {

                const alerta = document.querySelector('.alerta');
                if (!alerta) {
                    
                
                // crear alerta
                const alert = document.createElement('div');
                alert.classList.add('px4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center','border','alerta');

                if (tipo === 'error') {
                 alert.classList.add('bg-red-100','border-red-400','text-red-600')   
                }else{
                    alert.classList.add('bg-green-100','border-green-400','text-green-600')

                }

                alert.textContent = mensaje

                formulario.appendChild(alert)

                setTimeout(() => {
                    alert.remove()
                }, 1000);
            }
        }




})();