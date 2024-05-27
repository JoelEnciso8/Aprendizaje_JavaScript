// Variables
const formularioId = document.querySelector('#formulario');
const listaTweetsId = document.querySelector('#lista-tweets');
let tweets =[];



// Eventos 
eventListener()

function eventListener() {
    formularioId.addEventListener('submit', agregarTweet)

    document.addEventListener('DOMContentLoaded',()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });

}



function agregarTweet(e) {
    e.preventDefault()
    const tweet = document.querySelector('#tweet').value;
    // validacion
    if (tweet === "") {
        mostrarError('No puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }


    // Agg arr al tweet

   tweets = [...tweets, tweetObj];
   syncStorage() 
    // Creando HTML 

    crearHTML()
    formularioId.reset()

}


// Funcion mensaje de error

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    // Insertarlo en el contenido

    const contenido =  document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
 
    
    // Elimina la alerta despues de 3Seg

    setTimeout(() => {
        mensajeError.remove();
    }, 1000);

}


    // Listado de Tweetts

    function crearHTML() {
        limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.textContent = 'X';

            // funcion eliminar
                btnEliminar.onclick = () =>{
                    borrarTweet(tweet.id)
                }

             const li = document.createElement('li');
            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar)
            listaTweetsId.appendChild(li)
        });
    }   
}



// Sync Storage

function syncStorage() {
   localStorage.setItem('tweets',JSON.stringify(tweets));
}

// Borrar Tweet'

function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML()
    syncStorage()
}


// limpiar HTML

function limpiarHTML() {
    while (listaTweetsId.firstChild) {
        listaTweetsId.removeChild(listaTweetsId.firstChild);
    }
}