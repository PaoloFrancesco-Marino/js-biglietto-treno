/**
 * Train Ticket
 */

// 1- chiedere numero km da percorrere al passeggero

var km = parseInt(prompt('Quanti km devi percorrere?'));

console.log('Km da percorrere: ', km + ' km');

// 2- età del passeggero

var age = parseInt(prompt('la tua età?'));

console.log('la tua età: ', age);

// 3- prezzo del biglietto in base ai km da percorrere 0.21€ al km

var costoKm = 0.21;

var prezzo = km * costoKm;

// 4-calcolo sconto del 20%

var sconto_20 = prezzo * 20 / 100;

// 5- calcolo sconto del 40% 

var sconto_40 = prezzo * 40 / 100;

// appplico gli sconti 

if (age < 18) {
  // 4.1- applico sconto del 20% per i minorenni
  var totale_sconto20 = prezzo - sconto_20;
  console.log('Il prezzo totale: ', prezzo.toFixed(2) +' €');
  console.log('il prezzo totale scontato del 20% è:', totale_sconto20.toFixed(2) + ' €');
  console.log('il valore dello sconto è: ', sconto_20 + ' €');
} else if (age >= 65) {
  // 5.1 applico sconto del 40% over 65
  var totale_sconto40 = prezzo - sconto_40;
  console.log('Il prezzo totale: ', prezzo.toFixed(2) +' €');
  console.log('il prezzo totale scontato del 40% è:', totale_sconto40.toFixed(2) + ' €');
  console.log('il valore dello sconto è:', sconto_40 + ' €');
} else {
  console.log('prezzo totale: ', prezzo.toFixed(2) +' €');
}

// 6- mostrare a schermo il prezzo del biglietto indicando se è stato applicato uno sconto