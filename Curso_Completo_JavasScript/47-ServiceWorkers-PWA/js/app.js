
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
<<<<<<< HEAD
    .register('../47-ServiceWorkers-PWA/sw.js')
=======
    .register('./sw.js')
>>>>>>> ab8fbcba9077205b8c543bee9b78671c0aea720c
    .then(registrado => console.log('se instalo correctamente',registrado))
    .catch(error => console.log('Fallo la instalacion',error))
}else{
    console.log('service workers no soportado');
}