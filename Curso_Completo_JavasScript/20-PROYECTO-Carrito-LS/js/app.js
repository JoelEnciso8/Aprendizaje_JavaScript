// creando un carrito de compras en Javascript 

// variables llamadas con queryselector

const carrito = document.querySelector('#carrito'); // # se usa para trabajar con ID
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); // # se usa para trabajar con ID, / tbody incluye lo que agg en el carrito
const vaciarCarrito = document.querySelector('#vaciar-carrito'); // seleccionamos el id que vaciara el carrito una vez finalizada la compra o borrado el producto 
const listaCurso = document.querySelector('#lista-cursos'); // # se usa para trabajar con ID
let articulosCarrito = []; // iniciamos con el art vacio para ir llenando el carrito



// con la funcion registramos todos los event listener

registroEventlistener()
function registroEventlistener() {

    // cuando agg un curso presionando agg carrito
    listaCurso.addEventListener('click',aggCurso); // se le añade una funcion (aggCurso) para que pueda dar la respuesta del event

    // Elimina cursos del carrito;
    carrito.addEventListener('click',eliminarCurso);

    //localStorage 
    document.addEventListener('DOMContentLoaded',()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML()
    });

    // vaciar carrito
    vaciarCarrito.addEventListener('click', () =>{
        articulosCarrito  =[];

        LimpiarHTML(); //Eliminamos todo el HTML
    })

 

}

// Elimina un curso del carrito 

function eliminarCurso(e) {
    e.preventDefault();
    
    // console.log(e.target.classList)
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        // elimina el arreglo del articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        carritoHTML()// iterar sobre el carrito y mostar su html
    }
}

function aggCurso(e) { // creamos la funcion que ira en el evento de listaCurso

    e.preventDefault(); // Bubbling :prevenimos la accion por default de que se vaya al ID y se quede fijo,la idea es hacer mas compras
    
    if (e.target.classList.contains('agregar-carrito'))  { // verificamos si el el tiene el carrito agg
        const selectedCourse = e.target.parentElement.parentElement;    // property returns the parent element of the specified element 
        leerDatosCurso(selectedCourse); // llamamos la funcion leerDatosCurso con el fin de que la informacion del curso que selecciones se pueda ver reflejada en la compra 

    }

}

// Leyendo los datos que seleccionemos, del contenido HTML que se le de click

    function leerDatosCurso(curso) {
        // console.log(curso);

        // se crea un objet con el contenido del curso
        const info = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent, // en la etiqueta span tenemos el descuento
// cada curso tiene un ID propio , para acceder a esos atributos debemos
            id: curso.querySelector('a').getAttribute('data-id'), //The getAttribute() method returns the value of an element's attribute.
            cantidad: 1

            
        };

            // revisa si un elem ya existe en el carrito

        const existe = articulosCarrito.some(curso => curso.id === info.id);
        if (existe) {
            // actualizamos la cantidad
            const cursos = articulosCarrito.map( curso =>{
                if ( curso.id === info.id) {
                    curso.cantidad++;
                    return curso; // el objeto actualizado.
                }else{
                    return curso; // return objt no duplicados
                }
            });
        }else{
            // agrega elem al arr del carrito
            articulosCarrito =[...articulosCarrito, info] // creamos una copia del elem y llamamos la funcion info para dar detalle del curso que vamos a comprar 
        }   // Agrega elem al articulo 
         
            // console.log(articulosCarrito);

            carritoHTML()
    }


    // muestra el carrito de compras en el HTML 
    function carritoHTML() {

        
        // Limpia HTML
        LimpiarHTML()
        
        
                
        
        articulosCarrito.forEach(curso => { // para iterar cada curso que se tiene se usa un for each el cual recorre cada obj, index
            const {imagen, titulo,precio,cantidad,id} = curso;
            const row = document.createElement('tr'); //The TableRow object represents an HTML <tr> element.
            row.innerHTML = `
            <td>
            <img src = "${imagen}"  width = "100">
            </td>
            <td>
            ${titulo}
            </td>
            <td>
            ${precio}
            </td>
            <td>
            ${cantidad}
            </td>
            <td>
                <a href="" class="borrar-curso" data-id="${id}"> X </a> 
            </td>
            
            `;
            
            // agrega el html de carrito en el Tbody 
            contenedorCarrito.appendChild(row);
        });



        // Agrega el HTML del carrito tbody
        
        syncStorage()
    }

    function syncStorage() {
        localStorage.setItem('carrito',JSON.stringify(articulosCarrito));
     }


    // Limpiar HTML
    function LimpiarHTML() {
        // contenedorCarrito.innerHTML =''
        // para que el html sea mas rapido en js ejecutamos un while 

        while (contenedorCarrito.firstChild) {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild) // removechild nos ayuda a limpiar mas efectivo nuestro codigo 
        }
    }


