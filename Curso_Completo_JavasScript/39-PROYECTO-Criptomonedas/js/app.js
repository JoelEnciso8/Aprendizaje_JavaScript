// llamamos EL DOM 
const criptoSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');


// reamos un obj de busqueda
const objBusqueda = {
    moneda:'',
    criptomoneda:''
}

// creamos el Promise obtenerCriptomonedas, la cual nos devolvera las criptomonedas
const obtenerCriptomonedas = criptomonedas => new Promise(resolve=>{
    resolve(criptomonedas); // si es correcto el promise, resolve las criptomonedas
})

document.addEventListener('DOMContentLoaded',() =>{
  consultarCriptomonedas()  

  formulario.addEventListener('submit',submitFormulario);

  monedaSelect.addEventListener('change',leerValor);
    criptoSelect.addEventListener('change',leerValor);
})

// creamos la fn consultarCriptomonedas y llamamos la API 
function consultarCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    fetch(url)
    .then(respuesta => respuesta.json()) // consulta la API
    // creamos un Promise que nos de la criptomoneda.Data
    .then(resultado => obtenerCriptomonedas(resultado.Data)) // nos brinda el resultado de la API 
    .then(criptomonedas => selectCriptomonedas(criptomonedas)) // creamos la fn selectCriptomonedas la cual seleccionara cada criptomoneda existente
}

// fn selectCriptomonedas la cual seleccionara each criptomoneda
function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const {Name, FullName} = cripto.CoinInfo // extraemos de la API el nombre y Full name de la cripto
        
        const option = document.createElement('option');
            option.value = Name;
            option.textContent = FullName;
            criptoSelect.appendChild(option);

    });
}


// fn leerVAlor

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value
    
}


// creamos la funcion submitFormulario
function submitFormulario(e) {
    e.preventDefault(); // evita que se recargue la pagina cuando damos submit sin que este completa la informacion 

    // Validar agg destructuring
    const {moneda,criptomoneda} =objBusqueda
        if (moneda === ""|| criptomoneda === "") {
            // mostarmos alert
            mostrarAlerta('Ambos campos son obligatorios');
            return;
        }

    // consultando la API con los resultados    
        consultarAPI()



}

function mostrarAlerta(mensaje) {
    // mostrar el error una sola vez en el DOM 
    const existeError = document.querySelector('.error');
    if (!existeError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error')
        
        // Mostrando msj de error   
        divMensaje.textContent = mensaje
    
        // agg the alert to the id formulario in order to be shown in the DOM  
        formulario.appendChild(divMensaje)
    
            // remove the alert time in the DOM, this will dessapear after 3 sec
            setTimeout(() => {
                divMensaje.remove()
            }, 1000);    
    }

    
};


// reamos la fn consultarAPI

function consultarAPI() {
    const {moneda,criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    // llamamos la fn mostrarSpinner
    mostrarSpinner()


    fetch(url)
    .then(respuesta => respuesta.json())
    .then(cotizacion => mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]))

}


function mostrarCotizacionHTML(cotizacion) {
    // limpiamos todo residuo de nuestro HTML 
    limpiarHTML()



    // mostrando la cotizacion el nuestro HTML 
    const {HIGHDAY,PRICE,LOWDAY,CHANGE24HOUR,LASTUPDATE} = cotizacion;


    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `
        El precio es: <span> ${PRICE}</span>
    
    `
    const highDay = document.createElement('p');
    highDay.innerHTML = `
        El precio Mas alto del dia es: <span> ${HIGHDAY}</span>
    
    `
    const lowDay = document.createElement('p');
    lowDay.innerHTML = `
        El precio Mas bajo del dia es: <span> ${LOWDAY}</span>
    
    `
    const ultimoDia = document.createElement('p');
    ultimoDia.innerHTML = `
        El precio ayer fue: <span> ${CHANGE24HOUR}</span>
    
    `
    const actualizacion = document.createElement('p');
    actualizacion.innerHTML = `
        Ultima Actualizacion : <span> ${LASTUPDATE}</span>
    
    `
    resultado.appendChild(precio);
    resultado.appendChild(highDay);
    resultado.appendChild(lowDay);
    resultado.appendChild(ultimoDia);
    resultado.appendChild(actualizacion);
    

}


// Limpiando HTML 
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

// creamos la Fn mostarSpinner

function mostrarSpinner() {
    limpiarHTML()

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');
    spinner.innerHTML= `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    `;


    resultado.appendChild(spinner);

}