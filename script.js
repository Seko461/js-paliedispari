
// // Esercizio 1
// // Dichiarazione della parola da analizzare
// var parola = prompt('Inserisci una parola');

// // Definizione funzione 
// function palindroma(parola) {
//     for (let i = 0; i < parola.length / 2; i++) {
//         // Se un carattere non corrisponde al carattere nell'altra metà: NON palindroma
//         if (parola[i] !== parola[parola.length - i - 1]) {
//             return false;
//         }
//     }
//     // Parola è palindroma
//     return true;
// }

// if (palindroma(parola)) {
//     console.log(parola + " è una parola palindroma.");
// } else {
//     console.log(parola + " non è una parola palindroma.");
// }




// esercizio 2
let user = prompt("Inserisci pari o dispari");
let userNUmber = prompt("inserisci un numero da 1 a 5");
let pari = "pari";
let dispari = "dispari";

console.log(user, userNUmber);


function randomNumber() {
    let num = Math.ceil(Math.random() * 5);

    return num;
}
let computerNumber = randomNumber();
console.log(computerNumber);


function sum() {
    let resultOfsum = Number(userNUmber) + Number(computerNumber);
    return resultOfsum;
}
let resultOfsum = sum();
console.log(resultOfsum);

if (sum % 2 == 0)