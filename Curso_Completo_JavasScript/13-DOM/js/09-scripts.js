// Eliminando Elementos del DOM 

// const eliminarElementosDelDOM = document.querySelector('a')
// eliminarElementosDelDOM.remove();

// una manera de eliminar un element es por si mismo , usando remove()


// Eliminando desde el parent 

const nav = document.querySelector('.navegacion')

const navPrueba = nav.children;

for (let i = 0; i < navPrueba.length; i++) {
    console.log(navPrueba[i]);
    
}

nav.children[0].remove();