// para calcular los numeros largos usamos reduce 
let input = 0;
const bigSum = ar.reduce((acc, currentV) => acc + currentV + input);
return bigSum;

// to calculate the absolute difference we can use math.abs(),sin embargo debemos iterar antes 
// usando un foor loop y return las variables a calcular

// para calcular el ratio se debe crear const positiva negativa y zero la cual llevaran el valor de 0 
// seguido de un if para comparar los valores

let positive = 0;
let negativa = 0;
let zero = 0;


arr.forEach(element => {
  if (element > 0)  {
    positive ++
  }
});

// stair case - using .repeat()
// para repetir un valor en secuenccia usamos repeat el caul tambien 
// nos ayuda aen construir y devolver una nueva cadena


function staircase(n) {
  for(let i = 1; i <= n; i++) {
      console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}

// Usage:
staircase(5);

for (const element of arr) {
  
}


// para ordenar un elemento de arrarys usamos .sort() el cual ordena los arrays de manera binaraia 

function minMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let minSum = 0, maxSum = 0;
  for(let i = 0; i < 4; i++) {
      minSum += arr[i];
      maxSum += arr[i + 1];
  }
  console.log(minSum + " " + maxSum);
}

// Usage:
let arr = [1, 3, 5, 7, 9];
minMaxSum(arr);



// para identificar cuando es mas grande un numero que otro usamos math.max ()
// con el fin de idenficar el numero mayor, pero a este le pasamos spread operator 
// ... para copiar el arr original y sacar la informacion 

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = Math.max(...candles)
  let count = candles.filter(candle => candle === max).length;
  return count;



}


// luego usamos filter para decirle cual es el element que queremos recibir en pantalla
// Floyd-Warshall Algorithm 