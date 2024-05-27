const autenticado = true;

// si el const esta en boolean no se debe agregar ese valor en if , ya que el codigo lo define 
if (autenticado) {
    console.log("Esta autenticado");    
}


const puntaje = 499;


if (puntaje > 400) {
    console.log("Eres Increible");
}else if(puntaje < 220){console.log("buen trabajo");}