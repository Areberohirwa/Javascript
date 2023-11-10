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
        alert("jij bent raar");
    }
}

askRandomName();
//////////////////////////////

// opdr 5 
let euros = prompt('vul een bedrag in euros');
// omzetten van een string naar nummers
euros = Number(euros);

let crypto = prompt('Kies een crypto(BTC, ETH, etc,...)');
let result = 0;


if (crypto === 'BTC') {
    // dan doen we hier een bitcoin berekening
    result = (1 / 35050) * euros;
    console.log('Bitcoins ', result);
} else if (crypto === 'ETH') {
    // dan doen we hier een ETH berekening
    result = (1 / 1887) * euros;
    console.log('ETH ', result);

} else if (crypto === 'XRP') {
    // dan doen we hier een XRP berekening
    result = (1 / 0.7) * euros;
    console.log('XRP ', result);

} else if (crypto === 'DOG') {
    // dan doen we hier een DOG berekening
    result = (1 / 0.07) * euros;
    console.log('DOG ', result);

} else if (crypto === 'SOL') {
    // dan doen we hier een SOL berekening
    result = (1 / 40.26) * euros;
    console.log('SOL ', result);

}

// opdr 6
for (let i = 0; i < 10; i++) {
    console.log('loop:', i)

}

console.log('Einde Programma');
//////////////////////////////

// opdr 7

counter = 0;

while (counter < 20) {
    counter++;

    console.log('dit is mijn huiswerk', counter);

    if (counter < 10)

        console.log('Dit is Javascript', counter);
}
///////////////////////////////

// opdr 8

numbers = 0;

while (numbers < 20) {
    numbers++;

    console.log('loop:', numbers)

    if (numbers > 9)

        break
}
//////////////////////////////

// opdr 9

let array = ['rood', 'groen', 'geel', 'blauwe', 'roze', 'tel'];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element !== 'tel') {
        const ulList = document.querySelector("ul");
        ulList.innerHTML += `<li>${element}</li>`;
    }
}
////////////////////////////////////

// opdr 10

let addBtn = document.querySelector('.show-artists');
let artistName = ['Drake', 'Jay-Z', 'Rihanna', 'Central Cee', 'Cardi b']
addBtn.addEventListener('click', function () {

    for (let index = 0; index < artistName.length; index++) {
        const artist = artistName[index];
        
        document.querySelector('.display-artist').innerHTML += '<li>' + artist + '</li>'
    }

})
//////////////////////////////////

// opdr 11

let userInputMessage = document.querySelector('.user-input')
let addMessBtn = document.querySelector('.add-message')
let removeMessage = document.querySelector('.clear-message')
let showUserMessage = document.querySelector('.add-user-message')

addMessBtn.addEventListener('click', function () {
    const inputMessage = userInputMessage.value;

    showUserMessage.innerHTML += '<li>' + inputMessage + '</li>';
})

removeMessage.addEventListener('click', function () {
    showUserMessage.innerHTML = ' ';
})

////////////////////////////////

// opdr 12

function showMessage(message) {
    console.log(message);
}

showMessage('Dit is een herhaling opdracht');
//////////////////////////////

// opdr 13

function showSum(a, b) {
    let result = a + b;
    return result;
}

let sum = showSum(456789, 4567890)

console.log('Dit is de Product van a + b:', sum)
//////////////////////////////

// opdr 14

let arraysColor = ['rood', 'groen', 'geel', 'blauwe', 'roze', 'Wit', 'oranje', 'zwart'];
for (let i = 0; i < arraysColor.length; i++) {
    const element = arraysColor[i];
    if (element !== 'tel') {
        let showUserarrays = document.querySelector('.array-display')
        showUserarrays.innerHTML += `<li>${element}</li>`;
    }
}
/////////////////////////////////////

// opdr 15

function getProduct(c, d) {
    let product = c * d;
    return product;
}

let multiply = getProduct(123456789, 9876543);
console.log('Dit is de product:', multiply);

// opdr 16

let arrayOfNumbers = [1, 3, 5, 7, 11];

function getSumOfArray(numbersArray) {
    let total = 0;

    for (let sum of numbersArray)
        total += sum;
    return total

}

console.log(getSumOfArray(arrayOfNumbers));
