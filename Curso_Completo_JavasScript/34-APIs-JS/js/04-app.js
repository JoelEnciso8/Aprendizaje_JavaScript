const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');


abrirBtn.addEventListener('click',pantallaCompleta);
cerrarBtn.addEventListener('click',cerrarPantallaCompleta);

// entrar en fullScreen
function pantallaCompleta() {
    document.documentElement.requestFullscreen(); //se pueden agg imagenes o videos
}
// Salir de fullScreen
function cerrarPantallaCompleta() {
    document.exitFullscreen();
}