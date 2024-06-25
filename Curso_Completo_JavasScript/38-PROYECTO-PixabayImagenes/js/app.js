// Iniciamos nuestro project 

// llamamos al resultado y posteriormente el formulario de nuestro HTML 
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
// Agregamos la paginacion 
const paginacionDiv = document.querySelector('#paginacion')


const registrosPorPag =  30;
let totalPaginas;
let iterador;
let pagActual = 1;


// Event Handler to run in the entire web 
window.onload = () =>{

    formulario.addEventListener('submit',validarFormulario);
}


function validarFormulario(e) {
    // Avoid unecesary reloading on the web 
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value // value allows to see the value in the id termino 

    // validate if the id termino has a character if not return false

    if (terminoBusqueda === '') {
        mostrarAlerta('Add a search criteria ...');
        return;
    }

    // We call the API
    buscarImagenes();

}


// we create an alert  fn 

function mostrarAlerta(mensaje) {

    //avoiding multple alerts
    const existeAlerta = document.querySelector('.bg-red-100');
    if (!existeAlerta) {
        
    //   create the p etiquete
    const alerta = document.createElement('p');

    // create the alert using tailwind
    alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center');

    // create the alert and adding to the DOM
    alerta.innerHTML =` 
    
    <strong class="font-bold">Error!!</strong>
    <span class="block sm:inline">${mensaje}</span> 
    `;

    // agg the alert to the id formulario in order to be shown in the DOM  
    formulario.appendChild(alerta)

    // remove the alert time in the DOM, this will dessapear after 3 sec
    setTimeout(() => {
        alerta.remove()
    }, 3000);
    }


}


function buscarImagenes() {
    const termino = document.querySelector('#termino').value
    // API key
    const key = '44581309-daf505da25cc70aed60990afb';

    // pasamos valores del key y termino(termino de busqueda)
    // Leyendo nuestra documentacion de la API https://pixabay.com/api/docs/ podemos utilziar la informacion a nuestro favor , tanto como agg mas numeracion de pagina, como mostrar el orden en que se deben mostrar
    
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPag}&page=${pagActual}`;
    
    // add fetch to look up in our API 

    fetch(url)
    .then(respuesta =>respuesta.json())
    .then(resultado=> {
        totalPaginas = calcularPaginas(resultado.totalHits)
        mostrarImagenes(resultado.hits)
    })
    // .catch(console.log('Error en la API'))

}


// generador que registrará la cantidad de elementos(img) en una pagina
function * crearPaginador(total) {
    for (let i = 1; i <= total; i++) {
       yield i;
        
    }
}


// calcular paginas
function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registrosPorPag))
}



function mostrarImagenes(imagenes) {
  
// Limpiando HTML 
while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild)
}

// iterate on the imagenes and create the HTML 
imagenes.forEach(imagen => {
    const{previewURL,likes,largeImageURL,views} = imagen

    resultado.innerHTML+= `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4" >
            <div class="bg-white">
                 <img class="w-full" src="${previewURL}">

                <div class="p-4">
                    <p class="font-bold">${likes} <span class="font-light"> Me gusta</p>
                    <p class="font-bold">${views} <span class="font-light"> veces vista</p>
        
                 <a 

                 class ="block w-full bg-blue-800 hover:bg-blue500 text-white uppercase font-bold text-center rounded mt-5 p-1"   
                 href ="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                >
                    Ver imagen

                </a>
                
                </div>
          </div>
      </div>

    `


});

// limpiar paginador prev
while (paginacionDiv.firstChild) {
    paginacionDiv.removeChild(paginacionDiv.firstChild)
}

imprimirPaginador()

}


// imprimimos el paginador
function imprimirPaginador() {
    
 iterador = crearPaginador(totalPaginas)

while (true) {
    const {value, done} = iterador.next()
        if (done)return 
            
        // in the oposite generate a buton for each element 
    const buton = document.createElement('a');
    buton.href = '#'
    buton.dataset.pagina = value;
    buton.textContent = value;
    buton.classList.add('siguiente','mx-auto' ,'bg-yellow-400','px-4','py-1','mr-2','font-bold','mb-4','rounded','justify-center');

    buton.onclick = () =>{
        pagActual = value;
        buscarImagenes()
    }

    
    paginacionDiv.appendChild(buton)

}
}