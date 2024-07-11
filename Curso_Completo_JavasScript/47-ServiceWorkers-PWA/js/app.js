
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./js/sw.js')
    .then(registrado => console.log('se instalo correctamente',registrado))
    .catch(error => console.log('Fallo la instalacion',error))
}else{
    console.log('service workers no soportado');
}