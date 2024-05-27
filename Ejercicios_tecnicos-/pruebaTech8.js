/*4) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/ 








/*24 Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
  pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/ 

    const ascendenteYdescendente =(arr = undefined)=>{
          // Validations agregamos el constructor Array que identifique que todos los elementos que se esten agg sean Arrays
          if(arr === undefined || arr.length === 0 ) return console.log("El arreglo esta vacio. No ingresaste un Array de numeros");
        if(!(arr instanceof Array)) return console.log("El valor ingresado no es un arreglo");
       
        // Validation in fuction, to check if the information is array or not 
        for (const num of arr) {
            if(typeof num !=="number") return console.log(`el valor ${num} no es un Array valido`);;
        }
        
        // Function ascendent and descendt agregando el metodo slice() 
        // que nos devuelve una copia de una parte del array dentro de un nuevo array el cual con sort() ordenamos de manera local, 
        // este ordena el codigo por defecto, unicode, si no hya un valor agregado que lo ordene de la forma en que queremos 

        const ascendent = arr.slice().sort((a,b)=> a-b);
        const descendt = arr.slice().sort((a,b)=> b-a);

        return console.log({ "Original Array " : arr , "Ascendent" : ascendent,"Descendt" : descendt})

        
    }

    // ascendenteYdescendente([])
    // ascendenteYdescendente([""])
    // ascendenteYdescendente([true])
    // ascendenteYdescendente([7, 5,7,8,6])






// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].


const borrarDuplicado = (arr = undefined) =>{
          // Validations agregamos el constructor Array que identifique que todos los elementos que se esten agg sean Arrays
          if(arr === undefined || arr.length === 0 ) return console.log("El arreglo esta vacio o no ingresaste un Array valido");
          if(arr.length === 1) return console.log("El arreglo debe ser al menos dos elementos")
          if(!(arr instanceof Array)) return console.log("El valor ingresado no es un arreglo");
          
          // Validation in fuction, to check if the information is array or not 

          //   // se le pasan tres parametros para identificar el valor del array, la posicion y el valor del mismo, el cual nos devuelve, a traves de 
          // indexOf() el valor  inddelex que se repite , lo que como resultado nos dara los numeros repetidos sin repetirse junto a los elementos que no se repiten 
        
      
          // return console.log( {"Original": arr, " sinDuplicados": arr.filter ((value,index,self)=> self.indexOf(value)===index) 

          // ahora con Set, aplicamos el spread operator el cual nos brinda el arr original y trae el obj que no tiene duplicaciones. 
          return console.log( {"Original": arr,  sinDuplicados : [...new Set(arr)] 
        
        });

            


}

        // borrarDuplicado([]);
        // borrarDuplicado(2);
        // borrarDuplicado([2]);
        // borrarDuplicado(["x", 10, "x", 2, "10", 10, true, true])





        // 26) Programa una función que dado un arreglo de números obtenga el promedio,
        //  pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

        // creamos la funcion arrow 

            const promedio =(arr = undefined)=>{

         // Validations agregamos el constructor Array que identifique que todos los elementos que se esten agg sean Arrays
         if(arr === undefined || arr.length === 0 ) return console.log("El arreglo esta vacio. No ingresaste un Array de numeros");
         if(!(arr instanceof Array)) return console.log("El valor ingresado no es un arreglo");
         
         for (const num of arr) {
            if(typeof num !=="number") return console.log(`el valor ${num} no es un numero valido`);
    
        }
            // creamos una let que nos indique el valor a sumar el cual sera 0, 
            // lo iteramos por un for loop luego de haber recorrido cada elemento del array y le decimos que la suma sea igual al array 
            
            // let suma = 0;
            // for (var i = 0; i < arr.length; i++) {
            //   suma += arr[i];
            // }
            // // creamos una const llamada promedio la cual dividiremos la suma con el largo del array , esto nos da el valor del promedio deseado
            // const promedio = suma / arr.length;

            // return console.log(`el promedio de ${arr} es ${promedio}`);
            // }

            return console.log(arr.reduce((total,numero, index,arr)=> {
              total += numero;
              if (index === arr.length -1) {
                // join() nos ayuda a unir el simbolo de suma con el texto para mejor visibilidad. 
                return `el promedio ${arr.join(" + ")} es ${total/arr.length}`
              } else{
                return total;
              }
            }))

          }
            // promedio([]);
            promedio([9,8,7,6,5,4,3,2,1,0]);