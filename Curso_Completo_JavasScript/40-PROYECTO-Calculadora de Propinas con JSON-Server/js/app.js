
// ruta para llama json server     json-server ./js/db.json --port 4000

// Creamos un obj para poder darle funcionalidad anuestro modal 
let cliente = {
    mesa: '',
    hora: '',
    pedido: [],

}


// crear const categorias la cual se usara en la linea 103
const categorias = {
    1:'Comida',
    2:'Bebidas',
    3:'Postres',
}

// btn que llama la fn guardarCliente 
const btnEl= document.querySelector('#guardar-cliente')

btnEl.addEventListener('click',guardarCliente);

// creamos la fn que guradara cada cliente 
function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // validaciones
    // Revisar si hay vampos vacios
    const camposVacios = [mesa, hora].some(campo=> campo === '');
    if (camposVacios) {
        // evitar varios msj de error 
        const alertaExiste = document.querySelector('.invalid-feedback')
        if (!alertaExiste) {
            // scripting
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback','d-block','text-center')
            alerta.textContent='Todos los campos son OBLIGATORIOS'
            document.querySelector('.modal-body').appendChild(alerta)    
            // Elimina el msj alerta 
            setTimeout(() => {
                alerta.remove()
            }, 2000);
        }
        return;   
    }

    // Asignando datos del FORM a clientes usando el obj de la linea 5
        cliente ={...cliente,mesa, hora}

        // Ocultar modal cuando el cliente ha sido agregado
        const modalForm = document.querySelector('#formulario'); // id en el modal
        const modalBootstrap = bootstrap.Modal.getInstance(modalForm);
        modalBootstrap.hide(); // hide oculta el modal una vez creado

        // mostar secciones llamando la fn 
        mostrarSecciones()
        // obtener JSON API de los platillos llamando la fn 
        obtenerPlatillos()
}

// creamos la fn mostrar secciones
function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion =>seccion.classList.remove('d-none'));
    
}

// API donde obtenemos los platillos 
function obtenerPlatillos() {
    const url = 'http://localhost:4000/platillos'
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarPlatillos(resultado)) // lllamamos la fn mostrarPlatillos dentro de nuestra API 
    .catch(error => console.error(error))
}


// creamos la fn que mostrara los platillos en el HTML 
function mostrarPlatillos(platillos) {
    // console.log(platillos); // ayuda a probar si la fn esta siendo ejecutada de manera correcta
    const contenido = document.querySelector('#platillos .contenido'); // llamamos el Id y la clase de nuestro main en nuestro HTML 

    // creamos  foreach el cual nos mostrara cada platillo iterando cada resultado 
    platillos.forEach(platillo => {

        // creamos scripting de nuestro HTML 
        // elemento padre
        const row = document.createElement('DIV');
        row.classList.add('row','py-3','border-top');

        // Element Hijo
        const nombre = document.createElement('DIV');
        nombre.classList.add('col-md-4');
        nombre.innerHTML =`  <strong> Platillo:  </strong> ${platillo.nombre}`
        
        const precio = document.createElement('DIV');
        precio.classList.add('col-md-3','fw-bold');
        precio.innerHTML =`$ ${platillo.precio}`

        const categoria = document.createElement('DIV');
        categoria.classList.add('col-md-3');
        categoria.innerHTML =categorias[platillo.categoria] // pasamos el Const categorias creado en la linea 15 el cual nos mostara en HTML la categoria a la cual corresponde cada alimento

        // creamos la cantidad de items que veremos en el input 
        const cantidadInput = document.createElement('INPUT');
        cantidadInput.type ='Number';
        cantidadInput.min = 0; //valor minimo 
        cantidadInput.value = 0 // valor mostrado por default en el HTML
        cantidadInput.id = `Producto-${platillo.id}`
        cantidadInput.classList.add('form-control')
        
        // Fn que detecta la cantidad y el platillo agg , agg un callback el cual llamara la fn agregarPlatillo y nos dara el id correspondiente a cada platillo 
        cantidadInput.onchange  = function (){
            const cantidad = parseInt(cantidadInput.value); // creamos una variable que nos dara la cantidad y el valor corespondiente a dicha cantidad, lo convertimos a numeros enteros 

            agregarPlatillo({...platillo ,cantidad}) // se llama la fn que traera una copia de platillo (nuestro foreach asimismo llamara la cantaidad que creamos pasandola como numero )
        };

        // creamos el Input donde se agregara la cantidad de Items
        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2')
        agregar.appendChild(cantidadInput)



        // row tiene la clase de boostrap
        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);
        // row.appendChild(id);
        


        contenido.appendChild(row)

    });


        function agregarPlatillo(producto) {
            let {pedido} = cliente; // destructuring the obj pedido de la linea 5 
            const CANTIDAD_DEL_CARRITO = 0

            // detectar que el product este en el carrito 
            if (producto.cantidad > CANTIDAD_DEL_CARRITO) {

                // verificamos si el elemento ya existe en el arr usando .some
                if (pedido.some(articulo=> articulo.id === producto.id)) {

                    // articulo ya existe, ACtualizamos la cantidad
                    const pedidoActualizado= pedido.map(articulo =>{
                        if (articulo.id === producto.id) {
                            articulo.cantidad = producto.cantidad;
                        }
                        return articulo;
                    });

                    // asignamos el arr nuevo a cliente.pedido
                    cliente.pedido = [...pedidoActualizado];

                }else{
                //  el pedido no existe lo agregamos al arr de pedido
                cliente.pedido = [...pedido, producto]
                }
                
            
            
            }else{
                // eliminando el pedido si no es mayor a 0
                const resultado = pedido.filter(articulo => articulo.id !== producto.id);
                cliente.pedido = [...resultado];
            }

            // limpiar HTML prev
            limpiarHTML()
        
            if (cliente.pedido.length) {
                // mostrar el resumen
                actualizarResumen()
            }else{
                mensajePedidoVacio()
            }

        }

    }

        // creamos el scripting 
        function actualizarResumen() {
        // llamamos el id resumen y la class contenido de nuestro section en el HTML 
        const contenido = document.querySelector('#resumen .contenido');


        // parentElement and child element 
        const resumen = document.createElement('DIV');
        resumen.classList.add('col-md-6','py-2','card','px-3','shadow'); // botsrap

        // informacion de la mesa element child 
        const mesa = document.createElement('P');
        mesa.textContent = 'Mesa: ';
        mesa.classList.add('fw-bold');

        const mesaSpan = document.createElement('SPAN');
        mesaSpan.textContent = cliente.mesa;
        mesaSpan.classList.add('fw-normal');

        // Informacion de la hora element child 
        const hora = document.createElement('P');
        hora.textContent = 'Hora: ';
        hora.classList.add('fw-bold');

        const horaSpan = document.createElement('SPAN');
        horaSpan.textContent = cliente.hora;
        horaSpan.classList.add('fw-normal');

        // agg element padre para que sea visibile en nuestro DOM 
        mesa.appendChild(mesaSpan);
        hora.appendChild(horaSpan);


        // titulo de la seccion 
        const heading = document.createElement('h3');
        heading.textContent='Platillos consumidos';
        heading.classList.add('my-4','text-center');


        // Iterar sobre el Arr 
        const grupo = document.createElement('UL');
        grupo.classList.add('list-group');

        const {pedido} = cliente;

        pedido.forEach(articulo => {
            const {nombre, cantidad,precio,id} = articulo;

            const lista = document.createElement('LI');
            lista.classList.add('list-group-item');

            const nombreEl= document.createElement('H4');
            nombreEl.classList.add('my-4');
            nombreEl.textContent = nombre;

            // cantidad del articulo 
            const cantidadEl= document.createElement('P');
            cantidadEl.classList.add('my-4');
            cantidadEl.textContent = 'cantidad: ';
            
            // cantidad que el user verá
            const cantidadValor = document.createElement('SPAN');
            cantidadValor.classList.add('fw-normal');
            cantidadValor.textContent = cantidad;

            // cantidad del articulo 
            const precioEl= document.createElement('P');
            precioEl.classList.add('fw-bold');
            precioEl.textContent = 'precio: ';
            
            // precio que el user vera
            const precioValor = document.createElement('SPAN');
            precioValor.classList.add('fw-normal');
            precioValor.textContent = ` $ ${precio}`;


                    // creamos el subtotal que se vera en nuestro LI 

                    // cantidad del articulo 
                    const subtotalEl= document.createElement('P');
                    subtotalEl.classList.add('fw-bold');
                    subtotalEl.textContent = 'subtotal: ';
                    
                    // subtotal que el user vera
                    const subtotalValor = document.createElement('SPAN');
                    subtotalValor.classList.add('fw-normal');
                    subtotalValor.textContent = calcularSubtotal(precio ,cantidad);

                    // creamos el BTN eliminar dentro de nuestro resumen de pedido 

                    const btnEliminar = document.createElement('button');
                    btnEliminar.classList.add('btn','btn-danger');
                    btnEliminar.textContent = 'Eliminar pedido';


                    // fn para eliminar el pedido mediante el boton que creamos 
                    btnEliminar.onclick = function () {
                        eliminarProducto(id)
                    }



                // agg valores a los contenedores
                cantidadEl.appendChild(cantidadValor);
                precioEl.appendChild(precioValor);
                subtotalEl.appendChild(subtotalValor);


            // Agg element al contenedor Principal LI 
            lista.appendChild(nombreEl);
            lista.appendChild(cantidadEl)
            lista.appendChild(precioEl)
            lista.appendChild(subtotalEl)
            lista.appendChild(btnEliminar)




            // agregar lista al grupo principal
            grupo.appendChild(lista)

        });



        
        // agg al contenido to HTML
        resumen.appendChild(heading);
        resumen.appendChild(mesa);
        resumen.appendChild(hora);
        resumen.appendChild(grupo);



        // mostrando el parent element y los hijos en el HTML 
        contenido.appendChild(resumen);

        // mostrando propinas
        formularioPropinas()

    }

    // creanod la fn limpiaHTML 
    function limpiarHTML() {
        const contenido = document.querySelector('#resumen .contenido');
        while (contenido.firstChild) {
            contenido.removeChild(contenido.firstChild)
        }
    }

    // calculamos el subtotal 
    function calcularSubtotal(precio,cantidad) {
        return `$ ${precio * cantidad}`;
    }

    function eliminarProducto(id) {
    // eliminando el pedido si no es mayor a 0
    const {pedido} = cliente;
    const resultado = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];


        // limpiar HTML prev
        limpiarHTML()
            
        
        if (cliente.pedido.length) {
            // mostrar el resumen
            actualizarResumen()

            }else {

            mensajePedidoVacio()

            }

        

            // producto eliminado, regresamos cantidad 0 en el input
            const productoEliminado = `#Producto-${id}`
            const inputEliminado = document.querySelector(productoEliminado)
            inputEliminado.value = 0;

    }



    function mensajePedidoVacio() {
        const contenido = document.querySelector('#resumen .contenido');
        const texto = document.createElement('P');
        texto.classList.add('text-center');
        texto.textContent = 'Añade los elementos del pedido';

        contenido.appendChild(texto);

    }

    // creamos la fn mostrarpropina

    function formularioPropinas() {
    
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6','py-2','formulario');

    const divForm = document.createElement('DIV');
    divForm.classList.add('card','px-3','py-2','shadow')

    const heading = document.createElement('H3');
    heading.classList.add('my-4','text-center');
    heading.textContent = 'Propina';


    // radio button 10% propina (agregando opciones de propina)
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value ='10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('DIV');
    radio10Div.classList.add('form-check');

    
    // radio button  25 % propina  (agregando opciones de propina)
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value ='25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('label');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('DIV');
    radio25Div.classList.add('form-check');

    // radio button 50 % propina  (agregando opciones de propina)
    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value ='50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('label');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('DIV');
    radio50Div.classList.add('form-check');

    
    
    
    // Propina 10%
    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);
    
    // Propina 25%
    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);
    
    // Propina 50%
    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);



    // agregando al DIV principal
    divForm.appendChild(heading);
    divForm.appendChild(radio10Div);
    divForm.appendChild(radio25Div);
    divForm.appendChild(radio50Div);
    formulario.appendChild(divForm);


    // agg al formulario 
    contenido.appendChild(formulario)   

}


// calcular propina y totales a pagar

function calcularPropina() {
    const {pedido} = cliente;
    let subtotal = 0

    // calculamos el subtotal a PAgar
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio;
    });
    // seleccionar el radio btn
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;
    
    // calculando la propina
    const propina = ((subtotal * parseInt(propinaSeleccionada))/100);
    console.log(propina);

    // calcular el total a pagar
    const total = subtotal + propina;
   
    mostrarTotalHTML(subtotal, total, propina)

}


function mostrarTotalHTML(subtotal, total, propina) {
 
    // parent Element
    const divTotales = document.createElement('DIV');
    divTotales.classList.add('total-pagar');



    // agg el subtotal
    const subtotalP = document.createElement('P');
    subtotalP.classList.add('fs-3','fw-bold','mt-2');
    subtotalP.textContent = 'Subtotal del consumo: ';

    const subtotalSpan = document.createElement('span');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = ` $${subtotal}`;

    subtotalP.appendChild(subtotalSpan);
    
    // agg el subtotalPropina
    const subtotalPropina = document.createElement('P');
    subtotalPropina.classList.add('fs-3','fw-bold','mt-2');
    subtotalPropina.textContent = 'Propina: ';

    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = ` $${propina}`;

    subtotalPropina.appendChild(propinaSpan);
    
    // agg el subtotalPropina
    const totalParrafo = document.createElement('P');
    totalParrafo.classList.add('fs-3','fw-bold','mt-2');
    totalParrafo.textContent = 'Total a Pagar: ';

    const totalSpan = document.createElement('span');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = ` $${total}`;

    totalParrafo.appendChild(totalSpan);

        // eliminando el ultimo resultado cuando se efectua el pago (evitar multiple ventanas en le DOM )
        const totalPagarDiv = document.querySelector('.total-pagar');
        if (totalPagarDiv) {
            totalPagarDiv.remove()
        }

    // agg al parent
    divTotales.appendChild(subtotalP);
    divTotales.appendChild(subtotalPropina);
    divTotales.appendChild(totalParrafo);
    
    const formulario = document.querySelector('.formulario > div'); 
    formulario.appendChild(divTotales)

}