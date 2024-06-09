// APIs - Aplication Program Interface

// APIs propias de Js 
// Accionamos la Notificacion Alerts
const notificar = document.querySelector('#notificar');
notificar.addEventListener('click',()=>{ // se manda a llamar el query seleccionado
    Notification // se le pide permiso a la API 
    .requestPermission()
    .then(result =>{
        console.log('el resultado es ',result); // result en consola 
    })
});

// ver notificacion 
const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click',()=>{
    if (Notification.permission === 'granted') {
        const notificar = new Notification('Esta es la  notificacion ', {
            icon: 'img/ccj.png',
            body: 'Aprendiendo con project reales'
        });
        notificar.onclick = function () {
            window.open('https://www.udemy.com/')
        }
    }

});






