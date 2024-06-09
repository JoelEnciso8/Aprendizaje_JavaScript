// APIs  document.visibilityState

// La intencion de visibilityState es para reducir el consumo de datos y de memoria, el cual ayuda a que sea mas dinamico el web site 

document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState === 'visible'){
        console.log('ejectua la funcion para reproducir video..');
    }else{
        console.log('ejectua la funcion para pausaar...');
    }
})