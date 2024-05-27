// DOMContentLoaded --cuando el HTML es cargado y procesado, el DOM está completamente construido

document.addEventListener('DOMContentLoaded', function () { // una vez todo el codigo HTML sea descargado el codigo se ejecuta
        
    // creamos el objeto
        const email = {
            email: "",
            asunto: "",
            mensaje: ""
        } ;
     


        // seleccionar los elem de la interfaz
        const inputEmail = document.querySelector('#email');
        const inputCc= document.querySelector('#cc');
        const inputAsunto = document.querySelector('#asunto');
        const textArea = document.querySelector('#mensaje');
        const formulario = document.querySelector('#formulario');
        const btnSubmit = document.querySelector('#formulario button[type="submit"]');
        const btnReset = document.querySelector('#formulario button[type="reset"]');
        const spinner = document.querySelector('#spinner');


        // Input dinamiza el codigo en tiempo real
        inputEmail.addEventListener('input', validar);
        inputCc.addEventListener('input', validar);
        inputAsunto.addEventListener('input', validar);
        textArea.addEventListener('input', validar);


        formulario.addEventListener('submit',enviarEmail)


        btnReset.addEventListener('click', function (e) {  //ayuda a que el user tenga el control si desea o no reset la pag 
                e.preventDefault(); // evitamos que se recargue toda la pagina                // reset obj creado, para que los valores sean nuevos
                enviarFormulario();
        })


        function enviarEmail(e) {
            e.preventDefault();

            spinner.classList.add('flex');
            spinner.classList.remove('hidden');

            // Agg setTimeOut para simular el envio del email 
            setTimeout(()=>{

                spinner.classList.remove('flex');
                spinner.classList.add('hidden');

                   // reset obj creado, para que los valores sean nuevos
                   enviarFormulario();
                //    creamos una alerta
                const alertaExito = document.createElement('P');
                alertaExito.classList.add('bg-green-500','text-white','p-2','text-center','rounted-lg','mt-10','font-bold','text-sm','uppercase')

                alertaExito.textContent= 'mensaje enviado correctamentes';
                formulario.appendChild(alertaExito);

                setTimeout(()=>{
                    alertaExito.remove();
                },2000)



            },1000)
        }
        
    /*

        // asignar Eventos para que nuestro input email pueda dar una respuesta 
        inputEmail.addEventListener('blur', validar);  //The blur event fires when an element has lost focus. An element will lose focus if another element is selected.
    
        inputAsunto.addEventListener('blur', validar);
      //The blur event fires when an element has lost focus. An element will lose focus if another element is selected. 
        
        textArea.addEventListener('blur', validar);
        //The blur event fires when an element has lost focus. An element will lose focus if another element is selected. 


    */ 



        // haciendo la funcion mas dinamica, eliminando callbacks y usando la misma funcion para llamar el mismo proposito
        // parentElement ingresamos al elemento padre
        // nextElementSibling nos desplaza al siguiente elemento 
        // 
             function validar(e) {
            if (e.target.value.trim() === "") {
                alertaError(`El campo ${e.target.id} Es obligatorio`, e.target.parentElement);
                email[e.target.name] = '';
                comprobarEmail();
                return;
            } 
            
            if (e.target.id === "email" && !validarEmail(e.target.value)) {
                alertaError('Campo Email no es valido, intenta de nuevo', e.target.parentElement);
                email[e.target.name] = '';
                comprobarEmail();
                return;
            }
            
            limpiarAlerta(e.target.parentElement) // true , False, saldra cuando la regEx se cumpla o no
                
              //  asignando valores del objeto
           email[e.target.name] = e.target.value.trim().toLowerCase();
        //    comprobando el obj email 
            comprobarEmail();

        }




            // mostrar alerta de error, validando cada campo de event
            function alertaError(msn,referencia) {
                limpiarAlerta(referencia)

                // Generar Alerta en HTML
                const error = document.createElement('P');
                error.textContent= msn;
                error.classList.add('bg-red-600','text-white','p-2','text-center'); // se agg Tailwind CSS para agg color 

                // Inyectar el error al formulario 
                referencia.appendChild(error) //appendChild  agrega un hijo al padre para que muestre el error , inyecta el contenido al final de la etiqueta ante sde que se cierre
                
            }   


            function limpiarAlerta(referencia) {
           // Comprueba si ya existe una Alerta    
                
           const alerta = referencia.querySelector('.bg-red-600');
           if (alerta) {
               alerta.remove();
           };       
   
            };

        
            function validarEmail(email) {
                const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
                const result = regex.test(email)
                return result;
                }

                function comprobarEmail() {

                    if (Object.values(email).includes('')) {
                       // values retorna los valores del lado derecho(valores ingresados pro el user )
                    // keys retorna los valores del lado izq (valores agg por default)
                    // includes, nos ayuda ver si los elem tiene un arr vacio, y este devuelve un boolean , nos ayuda a horrar espacio 
                    btnSubmit.classList.add('opacity-50');
                    btnSubmit.disabled = true;
                    return;
                } 
                btnSubmit.classList.remove('opacity-50');
                btnSubmit.disabled = false;
                }

                    // creamos la fn que nos ayuda a reset el formulario para no usar tantas lineas de code
                    function enviarFormulario(e) {
                        email.email = "";
                        email.asunto= "";
                        email.mensaje ='';
                        
                        formulario.reset();
                        comprobarEmail()
                    }






















                

});

