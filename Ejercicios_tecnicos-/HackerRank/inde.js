// // // para calcular los numeros largos usamos reduce 
// // let input = 0;
// // const bigSum = ar.reduce((acc, currentV) => acc + currentV + input);
// // return bigSum;

// // const { NOMEM } = require("dns/promises");

// // // to calculate the absolute difference we can use math.abs(),sin embargo debemos iterar antes 
// // // usando un foor loop y return las variables a calcular

// // // para calcular el ratio se debe crear const positiva negativa y zero la cual llevaran el valor de 0 
// // // seguido de un if para comparar los valores

// // let positive = 0;
// // let negativa = 0;
// // let zero = 0;


// // arr.forEach(element => {
// //   if (element > 0)  {
// //     positive ++
// //   }
// // });

// // // stair case - using .repeat()
// // // para repetir un valor en secuenccia usamos repeat el caul tambien 
// // // nos ayuda aen construir y devolver una nueva cadena


// // function staircase(n) {
// //   for(let i = 1; i <= n; i++) {
// //       console.log(' '.repeat(n - i) + '#'.repeat(i));
// //   }
// // }

// // // Usage:
// // staircase(5);

// // for (const element of arr) {
  
// // }


// // // para ordenar un elemento de arrarys usamos .sort() el cual ordena los arrays de manera binaraia 

// // function minMaxSum(arr) {
// //   arr.sort((a, b) => a - b);
// //   let minSum = 0, maxSum = 0;
// //   for(let i = 0; i < 4; i++) {
// //       minSum += arr[i];
// //       maxSum += arr[i + 1];
// //   }
// //   console.log(minSum + " " + maxSum);
// // }

// // // Usage:
// // let arr = [1, 3, 5, 7, 9];
// // minMaxSum(arr);



// // // para identificar cuando es mas grande un numero que otro usamos math.max ()
// // // con el fin de idenficar el numero mayor, pero a este le pasamos spread operator 
// // // ... para copiar el arr original y sacar la informacion 

// // function birthdayCakeCandles(candles) {
// //   // Write your code here
// //   let max = Math.max(...candles)
// //   let count = candles.filter(candle => candle === max).length;
// //   return count;



// // }


// // // luego usamos filter para decirle cual es el element que queremos recibir en pantalla
// // // Floyd-Warshall Algorithm 


// // uso de Map() constructor

// // function data(input) {
  
// //     const newArr = input.split('/n'); // spliiting the input into an array
// //     const numberOfEntries = parseInt(newArr[0]) // parseInt return an integer number 


// //     // populate the phoneBook using map 
// //     const phoneBook = new Map();
// //     for (let i = 1; i <= numberOfEntries; i++) {
// //       const [name, phoneNum] = newArr[i].split(" ");
// //       phoneBook.set(name,phoneNum);
      
// //     }

// //     // handle the query
// //   for (let j = numberOfEntries + 1; j < newArr.length; j++) {
// //     const queryName = newArr[j].trim();
// //       // we validate that the information will match  
// //       if (phoneBook.has(queryName)) {
// //         console.log(queryName + '=' + phoneBook.has(queryName));
// //       }else{
// //         console.log('Not found');
// //       }
// //   }



// // }


// // function doSomething(n) {
// //   if(n === 0) {
// //     console.log("TASK COMPLETED!")
// //     return
// //   }
// //   console.log("I'm doing something.")
// //   doSomething(n - 1)
// // }
// // doSomething(10)

// // ---Factorial-----------------------------------------------------------------------------------------------------------

// // function factorial(n) {
// //   // Write your code here
// //   if (n === 0) {
// //     console.log('test1');
// //     return 1;
  
// //   } else{
// //     console.log('test 2');
// //     return n * factorial(n - 1);
// //   }

// // }
// // factorial(12)



// // -----------------------------


// // class Student extends Person {
//   /*	
//   *   Class Constructor
//   *   
//   *   @param firstName - A string denoting the Person's first name.
//   *   @param lastName - A string denoting the Person's last name.
//   *   @param id - An integer denoting the Person's ID number.
//   *   @param scores - An array of integers denoting the Person's test scores.
//   */
//   // Write your constructor here
//   constructor(firstName, lastName, idNumber,scores){
//       super(firstName,lastName,idNumber)  
//         this.testScore = scores
//   }
  
//   /*	
//   *   Method Name: calculate
//   *   @return A character denoting the grade.
//   */
//   // Write your method here
  
// //   calculate(){
// //     const average = this.testScore.reduce((sum, score) => sum + score,0 / this.testScore.length)
// //     if (average >= 90 && average <= 100) {
// //       return 'O';
// //     }else if (average >= 80 && average < 90) {
// //         return 'E'
// //     }else if (average >= 70 && average < 80) {
// //       return 'A'
// //   }else if (average >= 55 && average < 70) {
// //     return 'P'
// // }else if (average >= 40 && average < 55) {
// //   return 'D'
// // }else{
// //   return 'T'
// // }
// //   }
  
  
// // }



class myBook extends Book{
  
}