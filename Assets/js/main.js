
var numeroKm = parseFloat(prompt("Inserisci i Km da percorrere:"));

var eta = parseInt(prompt("Inserisci la tua età:"));

console.log(numeroKm, eta);

var prezzoCorsa = parseFloat(numeroKm) * 0.21;

console.log(prezzoCorsa);

var scontoUnder18 = prezzoCorsa * 0.2;

var scontoOver65 = prezzoCorsa * 0.4;



if (eta <= 18) {
  console.log(prezzoCorsa - scontoUnder18);
} else if (eta >= 65) {
  console.log(prezzoCorsa - scontoOver65);
} else {
  console.log(prezzoCorsa);
}
