// API Navigator  interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.


window.addEventListener('online',updateStatus);
window.addEventListener('offline',updateStatus);

function updateStatus() {
    if (navigator.onLine) {
        console.log('you are connected');
    }else{
        console.log('No conectado');
    }
}
