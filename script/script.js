// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.





// INPUT
// l'utente inserisce la sua eta (1-100)
let etaUtente = prompt ("inserisci la tua eta");
console.log (etaUtente);

// l'utente inserisce il numero di kilometri da percorrere (1-200)
let kmUtente = prompt ("inserisci il numero di km");
console.log (kmUtente);
// il pc restituisce un numero  (0,21-200)
let prezzoPc = 0.21 * kmUtente;
console.log (prezzoPc);


// ELABORAZIONE
// verifico l'eta dell'utente
let risultato;
// SE inferiore a 18 applico 20% Sconto 
if (etaUtente < 18) {
    prezzoPc = prezzoPc - (prezzoPc * 0.20);
    
    // SE ALTRIMENTI superiore a 65 applico 40% Sconto
}   else if (etaUtente > 64){
    prezzoPc = prezzoPc - (prezzoPc * 0.40); 
    
} else{
    console.log(risultato)
    
}

// ALTRIMENTI prezzo pieno (0.21 € al km)

// OUTPUT
// comunichiamo all'utente il prezzo del biglietto
alert("Il prezzo del biglietto è: " + prezzoPc.toFixed(2) + " euro");