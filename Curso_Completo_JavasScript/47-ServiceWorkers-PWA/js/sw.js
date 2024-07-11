// no usamos window en sw usamos self
//
self.addEventListener('install', e=>{
    console.log('instalado el Service Worker');

    console.log(e);
})

// activando service worker
    self.addEventListener('activate',e=>{
        console.log('Service Worker Activado');

        console.log(e);
    })

    // evento Fetch para descargar archivos

    self.addEventListener('fetch', e =>{

        console.log('fetch...', e);
    })
    