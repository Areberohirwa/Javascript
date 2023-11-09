console.log("---main loaded---")

// opdr 1

let x = 2000;
let salarisverhoging = 0.05;

let verhoging = x * salarisverhoging;

console.log("de nieuwe salsris is " + verhoging + "euros ")
////////////////////////////

// opdr 2

let list = document.querySelector(".ul-list");

let y = 400000;
let rente = 0.025;

let berekening = y * rente;

list.innerHTML = '<li>' + 'dit is de nieuwe rente per jaar ' + berekening + 'euros ' + '</li>';
///////////////////////////////////

// opdr 3

let price = 100;
let taxInclusief = 1.21;

let PayingPrice = price * taxInclusief;
list.innerHTML += '<li>' + 'dit is de nieuwe price van de jas ' + PayingPrice + 'euros ' + '</li>'




// opdr 4


function askRandomName() {
    const userInputName = prompt('wat is jouw persoon;')

    if (userInputName == "Student") {
        alert('u bent een student');
    } else if (userInputName == 'Docent') {
        alert('u bent een docent');
    } else if (userInputName == 'Directeur') {
        alert('u bent een Directeur');
    } else {
        alert("jij bent gay");
    }
}

// askRandomName();
//////////////////////////////

// opdr 5 thuis maken

// opdr 6



console.log('Einde Programma');

