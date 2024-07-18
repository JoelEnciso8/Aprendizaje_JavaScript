// Namespace, ayuda evitar colision con nnombres en el scope global del js 
//Ayuda a craear una fn global ayuda con project grandes a organizar 



//Siempre inicia con un obj 

const restaurantApp = {};


restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Burgerzza',
        precio: 55
    },
    {
        platillo: 'hot Dog',
        precio: 20
    }
]


restaurantApp.funciones = {
    mostrarMenu: () =>{
        console.log('Welcome to my restaurant');

        platillos.forEach((platillo,index) => {
            console.log(`${index}: Platillo: ${platillo.platillo} $ ${platillo.precio}`);
        });
        
    },
    ordenar:id =>{
        console.log(`tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo : (platillo, precio) =>{
        const nuevo = {
            platillo,
            precio
        }
        restaurantApp.platillos.push(nuevo)
    }
}


restaurantApp.funciones.ordenar(2);

restaurantApp.funciones.agregarPlatillo('Salchipapa',20);

const {platillos} = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos)