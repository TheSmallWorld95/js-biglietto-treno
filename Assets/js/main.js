var d = new Date

var nome = prompt("Inserisci il tuo nome");

var cognome = prompt("Inserisci il tuo cognome");

document.getElementById('nome').innerHTML += " " + nome + " " + cognome;

if (d.getHours() >= 23 && d.getHours() < 6 ) {
  // console.log("Buonanotte");
  document.getElementById('orario').innerHTML = "Buonanotte" + " " + nome + " " + cognome;
}else if (d.getHours() >= 18 && d.getHours() < 23) {
  // console.log("Buonasera");
  document.getElementById('orario').innerHTML = "Buonasera" + " " + nome + " " + cognome;
}else {
  // console.log("Buongiorno");
  document.getElementById('orario').innerHTML = "Buongiorno" + " " + nome + " " + cognome;
}

var numeroKm = parseFloat(prompt("Inserisci i Km da percorrere:"));

var eta = parseInt(prompt("Inserisci la tua età:"));

console.log(numeroKm, eta);

var prezzoCorsa = parseFloat(numeroKm) * 0.21;

console.log(prezzoCorsa);

var scontoUnder18 = prezzoCorsa * 0.2;

var scontoOver65 = prezzoCorsa * 0.4;



if (eta <= 18) {
  // console.log(prezzoCorsa - scontoUnder18);
  document.getElementById('prezzo').innerHTML += (prezzoCorsa - scontoUnder18).toFixed(2) + "$";
  document.getElementById('sconto').innerHTML += "20%";
} else if (eta >= 65) {
  // console.log(prezzoCorsa - scontoOver65);
  document.getElementById('prezzo').innerHTML += (prezzoCorsa - scontoOver65).toFixed(2) + "$";
  document.getElementById('sconto').innerHTML += "40%";
} else {
  // console.log(prezzoCorsa);
  document.getElementById('prezzo').innerHTML += (prezzoCorsa).toFixed(2) + "$";
  document.getElementById('sconto').innerHTML += "Nessuno sconto applicato";

}

document.getElementById('km').innerHTML += numeroKm + "KM";

document.getElementById('età').innerHTML += eta + " " + "anni";
