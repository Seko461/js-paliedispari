// Dichiarazione della parola da analizzare
var parola = prompt('Inserisci una parola');

// Definizione funzione 
function palindroma(parola) {
    for (let i = 0; i < parola.length / 2; i++) {
        // Se un carattere non corrisponde al carattere nell'altra metà: NON palindroma
        if (parola[i] !== parola[parola.length - i - 1]) {
            return false;
        }
    }
    // Parola è palindroma
    return true;
}

if (palindroma(parola)) {
    console.log(parola + " è una parola palindroma.");
} else {
    console.log(parola + " non è una parola palindroma.");
}

