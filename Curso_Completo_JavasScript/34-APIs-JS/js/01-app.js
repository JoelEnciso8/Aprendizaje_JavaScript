// APIs - Aplication Program Interface

// APIs propias de Js 

const notificar = document.querySelector('#notificar');
const verNotifi = document.querySelector('#verNotificacion');

notificar.addEventListener('click',()=>{ // se manda a llamar el query seleccionado
    Notification // se le pide permiso a la API 
    .requestPermission()
    .then(result =>{
        console.log('el resultado es ',result); // 
    })
});


// ver notificacion 


verNotifi.addEventListener('click',()=>{

        if (Notification.permission === 'granted') {
            new Notification('Esta es nueva ');
        }

});