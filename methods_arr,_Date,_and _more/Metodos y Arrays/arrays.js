
const xboxSerieX = ["ForzaHorizon 4","Fornite", "FarCry5","Mortal Kombat","Call Of duty", "Assassins's Creed ", "Batman Triology"];
let Xbox360 = ["Gear of war 1","Gear of war 2","Gear of war 3","HALO Infinite","DIABLO II",]
const classic = ["God Of War","Spider-Man","The witcher"];


const videoGames =[{
    Company:"Ubisoft",
    Category: "Arcade",
    Name:"Assassins Creed Origins",
    year: "2021",
    R:"15+",
},
{
    
    Company:"Activision Blizard",
    Category: "Action",
    Name:"Call of Dutry MW2",
    year: "2008",
    R:"18+"


},
{
    
    Company:"Epic games",
    Category: "RPG",
    Name:"Fornite",
    year: "2021",
    R:"12+"


},
{
    Company:"Ubisoft",
    Category: "Adventure",
    Name:"Prince of persia the warrior within",
    year: "2008",
    R:"18+"


},
{
    Company:"Ubisoft",
    Category: "Arcade ",
    Category: "Adventure",
    Name:"FarCry 5",
    year: "2020",
    R:"18+"


},
{
    Company:"CAPCOM",
    Category: "Arcade ",
    Category: "Adventure",
    Name:"resident Evil 5",
    year: "2023",
    R:"18+"


}
]




// metodo contact 
const consoleGame = xboxSerieX.concat(Xbox360);
// concatena los arrays unificandolos en uno se debe crear un VAR 

// Operator Spread 
// permite concatenar de manera grande y amplia varios elementos de Arrays 
    const operador = [...consoleGame,"Perro","Gato" ,...classic]

    // tammbien nos permite hacer copias con el Arr seleccionado 
        let copyClassic = [...classic];
        copyClassic.push("Test")





// Fill - Mutable 
consoleGame.fill("Test",0,2);
// Ayuda a cambiar el nombre de el elemento registrado

//Method Slice- inmutable 
const slice = consoleGame.slice(0,2);
// Nos ayuda a crear nuevos elementos 

// IndexOF -inmutable 
console.log(consoleGame.indexOf("Call Of duty"));
// Will display the pocision of the index 

// Methods - Mutables 

xboxSerieX.push("forza Horizon3")
const prueba = xboxSerieX.shift( )
console.log(prueba);
// .shift se recomienda usarlo con una variable, ya que este quita el primer elemento del arr
// y lo agrega en una variable flotante, donde se puede dar un valor futuro si es necesario 

const prueba1 = xboxSerieX.pop("")
console.log(prueba1);
// .pop este metodo cumple la misma funcion que el metodo shift, este elimina el ultimo array guardando su valor en un arreglo 


xboxSerieX.unshift("Need For Speed Carbon")
// .unshift nos ayuda agregando un elemento en primera posicion (0)


xboxSerieX.splice(2,0, "Bloody Roar2")

//  .splice, nos ayuda o removiendo o moviendo los elementos que posicionamos, splice usa instancias 
//  es decir ubicar el elemento segun su posicion y si se desea borrar un elemento se agg el numero de la psocion asignada o simplemente 0 para agg(1,0) 


// Methods - Inmutable 
//  cuando tenemos una funcion pura, esta no se modifica, la estructura de datos debe ser INMUTABLE 
//  Una funcion pura no debe  tener objector colaterales, si se recibe de afuera, debe ser un nuevo objeto sin modificar el elemento 


const obj = Object.freeze({
    nombre: "test",
    info:"Good"
});


obj.nombre="It works";//  Aqui se aplica la inmutabilidad con Object.freeze(), dado que .nombre pretendia reemplazar la informacion obtenida 



// con Object.freeze(), logramos que nuestro array u Objeto sea inmutable, con el fin de prservar nuestro codigo de manera eficiente 
// Object nos ayuda a no mutar el estado de nuestro codigo 
const newObj = {...obj};
newObj.nota ="Worked"
console.log(newObj);
console.log(obj);
// Para que un Objeto/ Arr sea inmutable en cuanto copiar su informacion deben aprender a susperar sus miedos 


















// // DOM y function to show on browser


showDown("Array1",videoGames)
// showDown("Array2",operador)
// showDown("Array3",nuevoValor)



function show(arr) {
    
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}

}


function showDown(element, arr) {
    document.getElementById(element).innerHTML ="";

    for (let i = 0; i < arr.length; i++) {
        document.getElementById(element).innerHTML+=
        `<div> ${arr[i]}<div>`
    }
}






















