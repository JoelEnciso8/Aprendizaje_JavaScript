// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number 
// that represents milliseconds since the midnight at the beginning of January 1, 1970

console.log(Date());

let fecha = new Date()
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getMilliseconds());
// ToString is another way to use DATE ()
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleString());
console.log(fecha.getTimezoneOffset());
// are most used to take as a reference
//  when is not the time from your country or place of residence
console.log(fecha.getUTCDate());
console.log(fecha.getUTCDay());
console.log(fecha.getUTCMonth());
//TIme Stamp is most used when you will save a file on database
// La manera de representar el tiempo desde enero 1970
console.log(Date.now());