// Chiediamo il chilometraggio del viaggio all'utente
const myKm = prompt('Quanti Km deve percorrere?');
console.log('I Km da percorrere sono:', myKm);

document.getElementById('my_km').innerHTML = myKm + ' Km';

// Chiediamo l'età all'utente
const myAge = prompt('Quanti anni ha?');
console.log("L'età dell'utente è:", myAge);

document.getElementById('my_age').innerHTML = myAge + ' anni';


// Calcoliamo il prezzo del biglietto 
const myPrice = 0.21; // Prezzo base al Km

let totalPrice = myKm * myPrice; // Prezzo intero del biglietto
console.log('Prezzo intero:',totalPrice);

totalPrice = (totalPrice.toFixed(2));
console.log('Prezzo arrotondato:',totalPrice);

document.getElementById('my_price').innerHTML = totalPrice + ' €';


// Calcoliamo eventuali sconti 
if (myAge < 18) {

    totalPrice = totalPrice - (20 / 100);
    totalPrice = (totalPrice.toFixed(2));
    console.log('Prezzo scontato del 20%:',totalPrice);
    document.getElementById('my_price').innerHTML = totalPrice + ' €';
    

} else if (myAge > 65) {

    totalPrice = totalPrice - (40 / 100);
    totalPrice = (totalPrice.toFixed(2));
    console.log('Prezzo scontato del 40%:',totalPrice);
    document.getElementById('my_price').innerHTML = totalPrice + ' €';

}
