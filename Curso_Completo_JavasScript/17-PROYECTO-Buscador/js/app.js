// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// contenedor de resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// creando un objeto con la busqueda el cual se mostrara en pantalla

const datosBusqueda  = {
    marca: '',
    year: '',
    minimo: '',
    maximo:'',
    puertas: '',
    transmision: '',
    color:'',
}


// Eventos

document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(autos); // muestra los carros 
    llenarSelect() // llena el año del vehiculo seleccionado
    
});

// EventListener para los selectores
    marca.addEventListener('change' , e =>{
        datosBusqueda.marca =e.target.value;
        filtrarAutos()


    });

    year.addEventListener('change' , e =>{
        datosBusqueda.year =parseInt(e.target.value);
        filtrarAutos()

    });

    minimo.addEventListener('change' , e =>{
        datosBusqueda.minimo =e.target.value;
        filtrarAutos()
    });
    
    maximo.addEventListener('change' , e =>{
        datosBusqueda.maximo =e.target.value;
        filtrarAutos()
    });

    puertas.addEventListener('change' , e =>{
        datosBusqueda.puertas =parseInt(e.target.value);
        filtrarAutos()
    });

    transmision.addEventListener('change' , e =>{
        datosBusqueda.transmision =e.target.value;
        filtrarAutos()
    });

    color.addEventListener('change' , e =>{
        datosBusqueda.color =e.target.value
        filtrarAutos()
    });


// funciones de alto valor 
function mostrarAutos(autos){

    limpiarHTML(); // debe estar limpio antes de imprimir 

    autos.forEach(auto => {

    const{marca, modelo, year, precio, puertas, color,transmision} = auto;
    autoHTML = document.createElement('P');

    autoHTML.textContent =`${marca},${modelo},${year},${precio},${puertas},${color},${transmision}`  

     // insertar en el html 
     resultado.appendChild(autoHTML);
})

}


// Limpiar HTML

function limpiarHTML(params) {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Funcion  Generar años del carro
function llenarSelect() {
    for (let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option); // agrega las opciones de año

        // console.log(i);
    }

}


// funcion que fultra con base a la busqueda- funcion de alto nivel (funcion que toma otra fn )

function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(FiltrarColor);
    
    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResult()
    }
}

function noResult() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent ='La informacion ingresada no es valida';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca) {
    return auto.marca === marca;
        
    }
        return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if (year) {
    return auto.year === year;
        
    }
        return auto;
}

    function filtrarMin(auto) {
        const {minimo} = datosBusqueda;
        if (minimo) {
            return auto.precio >= minimo;
        }
            return auto;
    }

    function filtrarMax(auto) {
        const {maximo} = datosBusqueda;
        if (maximo) {
            return auto.precio <= maximo;
        }
            return auto;
    }

    function filtrarPuertas(auto) {
        const {puertas} = datosBusqueda;
        if (puertas) {
            return auto.puertas === puertas;
        }
            return auto;
    }

    function filtrarTransmision(auto) {
        const {transmision} = datosBusqueda;
        if (transmision) {
            return auto.transmision === transmision;
        }
            return auto;
    }

   
    function FiltrarColor(auto) {
        const {color} = datosBusqueda;
        if (color) {
            return auto.color === color;
        }
            return auto;
    } 