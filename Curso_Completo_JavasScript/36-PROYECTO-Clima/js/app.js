// creando la app del clima 
const contenedor = document.querySelector('.container'); // llamamos al query contenedor que tenemos en nuestro HTML
const resultado = document.querySelector('#resultado'); //llamamos el query para editar el ID resultados
const formulario = document.querySelector('#formulario'); // mostara la informacion en HTML 


window.addEventListener('load',()=>{
    formulario.addEventListener('submit', buscarClima);

})

// creamos la fn buscarClima

function buscarClima(e) {
    e.preventDefault(); // evitar que la pagina se recargue 

    // validar la informacion 
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value

        if (ciudad=== '' || pais === '') {
            mostrarError('Ambos campos son obligatorios...') // este mensaje se autopopula una ves el error es true 
            return;
        }

      // consultando APIs
      consultandoAPI(ciudad, pais) 

}

// esta funcion se puede reutilizar 
function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100')
    // para que no se agg multiples alertas se recomienda (!) 
    // si no esta la alerta, creala 
    if (!alerta) {
        // creamos una alerta con div
    const crearAlert = document.createElement('div');
    // creamos el ClassList que dara el event en el HTML cuando no haya info en el formulario 
    crearAlert.classList.add('bg-red-100',"border-red-400","-red-700","px-4","py-3","rounded","max-w-md","mx-auto","mt-6","text-center"); //pasamos esta informacion de tailwind , la cual nos la dan en nuestra documentacion de project 

        // usando innerHTML podemos ver nuestra alerta en nuestro sitio web 
    crearAlert.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
    
    `
    // pasando el parametro mensaje mostrara el mensjaea de la funcion en pantalla 
    contenedor.appendChild(crearAlert) // llamando al contenedor de ciudad y de pais nos mostrara dicha alert 

    // elimina la alerta despues de 2 segundos 
        setTimeout(() => {
            crearAlert.remove() // remueve la alerta 
        }, 2000);
    }
}

// PARA TENER EN CUENTA: el catch se agrega para validar que el promise se cumpla , la API puede detectar si el resultado no es correcto, arrojamdo un 404 error




// para crear una API se necesita crear una key la cual nos dara acceso a la infromacion solicitada, una vez creada esa key procedemos a llamar la API mediante URL, creando la const y agregando template string
function consultandoAPI(ciudad, pais) {
    const appId = 'c7b1eec12daa46d7afc5daa510831c14'; // agregamos la key que nos da nuestra API en su sitioWeb
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    
    Spinner() // Spinner se mostrara mientras carga 

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        limpiandoHTML()//fn que limpia el HTML previo para poner informacion nueva

        if (datos.cod ==='404') {
            mostrarError('Ciudad No encontrada'); // creamos la fn que nos mostrara el msj de error 
            return;
        }

        // Mostrando respuesta en el HTML
        mostrarClima(datos);
    })

}

// function que muestra el clima , hacemos destructring del codigo usando {}

function mostrarClima(datos) {
    const {name,main:{temp,temp_max,temp_min}} = datos;
    const temperatura = toKelvinToCelcius(temp)
    const max = toKelvinToCelcius(temp_max)
    const min = toKelvinToCelcius(temp_min)


    

    // creando el nombre Ciudad
    const nombreCity = document.createElement('p')
    nombreCity.textContent = `Clima en ${name}`
    nombreCity.classList.add('font-bold','text-2xl')

//    Creando la temperatura Actual 
    const actual = document.createElement('p') // creamos un parrafo para mostrar la temp actual 
    actual.innerHTML = ` ${temperatura} &#8451;`; // entidad creada, se puede buscar para anexarla, esta entidad permite ver nuestro clima en grados centigrados y no en F
    actual.classList.add('font-bold','text-6xl')
    
    // Temperatura maxima registrada , usamos el mismo bloque de codigo 
    const tempMax = document.createElement('p');
    tempMax.innerHTML=` Max: ${max} &#8451;`
    tempMax.classList.add('text-xl')

// Temperatura minima registrada , usamos el mismo bloque de codigo 
    const tempMin = document.createElement('p');
    tempMin.innerHTML=` Min: ${min}  &#8451;`
    tempMin.classList.add('text-xl')

// Agregamos la informacion del resultado que quermos ver en nuestra web
    const resultadoDiv =document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(nombreCity) // agregamos el Parrafo que creamos al div 
    resultadoDiv.appendChild(actual) // agregamos el Parrafo que creamos al div 
    resultadoDiv.appendChild(tempMax) // agregamos el Parrafo que creamos al div 
    resultadoDiv.appendChild(tempMin) // agregamos el Parrafo que creamos al div 

    resultado.appendChild(resultadoDiv);
}   

// creamos un numero entero para que nos de el clima exacto
const toKelvinToCelcius = grados => parseInt(grados-273.15); // fn helper


// Limpiando el HTML

function limpiandoHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

// Spinner, creamos la fn de la cual usamos SpinKit https://tobiasahlin.com/spinkit/

function Spinner() {

    limpiandoHTML() // Limpiamos toda retroalimentacion generada 


    const divSpiner = document.createElement('div')
    divSpiner.classList.add('sk-cube-grid')
    divSpiner.innerHTML = `

  <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
  <div class="sk-cube sk-cube5"></div>
  <div class="sk-cube sk-cube6"></div>
  <div class="sk-cube sk-cube7"></div>
  <div class="sk-cube sk-cube8"></div>
  <div class="sk-cube sk-cube9"></div>

    
    `;

    resultado.appendChild(divSpiner)
}