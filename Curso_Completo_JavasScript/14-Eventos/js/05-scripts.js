// Eventos que suceden con el Scroll del mouse 

// window, revisamos nuestro codigo y conectamos 

window.addEventListener('scroll',() =>{
// Detectando Scrolling vertical

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // metodo que sirve para decir a que distancia se ecneuntarn los elementos 
        console.log(ubicacion);
    
    
    if (ubicacion.top < 784) {
        console.log('Ya esta visible');
        
    }else{
        console.log('Aun debes seguir Scrolling');
    }
})


