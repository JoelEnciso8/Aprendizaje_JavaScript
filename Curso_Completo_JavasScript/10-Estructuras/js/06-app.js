// Estructuras de control. Switch

// Switch case

const user = true;
const puedePagar = false;
// && busca que se cunmplan dos o mas condiciones
if (user && puedePagar) {
    console.log("Puede pagar");
    // || operator apra que pueda dar el resultado
}else if (!puedePagar || user){
    console.log("No puedes comprar en este momento");
}else if(!user){
    console.log("Create an account or LogIn ");
}else if (!puedePagar) {
    console.log("No money");
}