iniciandoApp();

function iniciandoApp() {
    console.log("Iniciando App..");
    segundaFuncion()
}


function segundaFuncion() {
    console.log("Desde la segunda Funcion");

        autenticandoUser("Joel")

}

// Asi se comunican las funciones


function autenticandoUser(user) {
    console.log("Autenticando, espere");
    console.log(`Autenticado, puede entrar ${user}`);
}
