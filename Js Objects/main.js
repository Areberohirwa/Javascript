console.log('...main is loaded...')


// opdr 1
let firstDetails = {
    firstName: "McCurry",
    lastName: "Mason",
    age: 18,
    LearningProcess: "MBO-Software Developper",
    Score: 56,
}
//////////////

// opdr 2

let facebook = {
    userName: "James",
    titel: "Facebook post",
    story: "Facebook time",
    date: "January 2023",
    Views: 123,
}
//////////////

// opdr 3

let eatingRecepts = [
    {
        titel: 'Tompouce Crooisant',
        details: 'De combinatie van croissantdeeg, een romige vulling van gele room en glazuur maakt dit gebakje een waar feestje om te eten. En hij is nog gemarmerd ook.',
        healthy: 'very healthy',
    },
    {
        titel: 'Vegan Slagroom',
        details: 'Je zelfgemaakte plantaardige alternatief voor slagroom! Zelf vegan fluff maken doe je met citroen, kikkererwten en poedersuiker.',
        healthy: 'very healthy',
    },
    {
        titel: 'Tater tots',
        details: 'Deze Amerikaanse klassieker, ooit een favoriet in de schoolkantine, kan je nu zelf thuis maken met maïzena, knoflookpoeder en uienpoeder. Frituren maar! Dompel ze in ketchup voor de ultieme ervaring.',
        healthy: 'very healthy',
    }

];
////////////

// opdr 4
let car1 = {
    Name: 'Volkswagen',
    description: 'Zeer nette Up! Zo goed als nieuw met van binnen en buiten geen gebruikssporen. Lichtmetalen velgen met zomerbanden enwinterbanden met originele VW doppen. Auto is netjes gebruikt',
    price: 5000,
    kilometer: 145.181,
    builddate: 2013,
}
let car2 = {
    Name: 'BMW',
    description: 'Maatwerk chiptuning stage 1 van 449,- vanaf 225,- incl. BTW, 30 dagen niet tevreden geld terug garantie en 5 jaar garantie op de software.',
    price: 225,
    kilometer: 4565.34,
    builddate: 2013,
}
let car3 = {
    Name: 'Toyota',
    description: 'Beste marktplaats bezoeker, hierbij een zeer nette ORIGINEEL NEDERLANDSE Toyota Auris Hybrid aangeboden, die niks mist behalve een nieuwe eigenaar! Met zijn zuinige, stille maar sterke 1.8 motor',
    price: 16995,
    kilometer: 84900,
    builddate: 2016,
}
let car4 = {
    Name: 'Volvo',
    description: 'Beste marktplaats bezoeker, hierbij een zeer nette ORIGINEEL NEDERLANDSE Toyota Auris Hybrid aangeboden, die niks mist behalve een nieuwe eigenaar! Met zijn zuinige, stille maar sterke 1.8 motor',
    price: 23000,
    kilometer: 5566,
    builddate: 2014,
}
let car5 = {
    Name: 'Mercedes',
    description: 'Ombouw naar grijs kenteken door Full History Cars.Luxehoogwaardige grijs kenteken sets voor Mercedes Grijs kenteken.',
    price: 5600,
    kilometer: 6789900,
    builddate: 2015,
}
/////////////

// opdr 5
let item1 = {
    title: 'Danerolles croissants',
    beschrijving: '240 g',
    actie: 'per blik 1.39',
    prijs: 1.39,
}
let item2 = {
    title: 'Grote Mandarijn',
    beschrijving: '1.5 kg',
    actie: '2.49 van 3.49',
    prijs: 2.49,
}
let item3 = {
    title: 'Kipkluifjes',
    beschrijving: '425 g',
    actie: 'per pak 3.49',
    prijs: 2.99,
}
let item4 = {
    title: 'Snoep tomaten',
    beschrijving: '240 g',
    actie: 'per blik 2.99',
    prijs: 2.49,
}
let item5 = {
    title: 'Verse Zeeuwse mosselen',
    beschrijving: '2 kg',
    actie: 'per 2k8 8.69',
    prijs: 6.49,
}
////////////

// opdr 6

let product = {
    name: 'Sony WH-1000XM4',
    price: 245,
    frequencies: 2,
    connection: 'Wireless with bluetooth',
}

let product2 = {
    name: 'LG OLED evo G3 65" zwart',
    price: 2175,
    productiondate: 2023,
    type: 'ultra HD',
}

let product3 = {
    name: 'Microsoft Surface Laptop 4 i7',
    price: 1054.80,
    resolution: '2496x1664',
    RAM: '8GB',
}

let product4 = {
    name: 'Samsung Tablet A8',
    price: 177,
    os: 'Android 11.0',
    screendiagonal: 10.5,
}

let product5 = {
    name: 'Goedkoopste HyperX Armada 27 Zwart',
    price: 275,
    refreshrate: 165,
}
//////////////

// opdr 7

for (let i = 0; i < eatingRecepts.length; i++) {
    const arrayDisplay = eatingRecepts[i];
    console.log('Dit is de titel', arrayDisplay.titel);
    console.log('-------------------');
    console.log('Dit is de details', arrayDisplay.details);
    console.log('-------------------');
    console.log('Dit is de gezond', arrayDisplay.healthy);
    console.log('-------------------');
}


//////////////

// opdr 8

let items = [
    {
        title: 'Danerolles croissants',
        beschrijving: '240 g',
        actie: 'per blik 1.39',
        prijs: 1.39,
    },
    {
        title: 'Grote Mandarijn',
        beschrijving: '1.5 kg',
        actie: '2.49 van 3.49',
        prijs: 2.49,
    },
    {
        title: 'Kipkluifjes',
        beschrijving: '425 g',
        actie: 'per pak 3.49',
        prijs: 2.99,
    },
    {
        title: 'Snoep tomaten',
        beschrijving: '240 g',
        actie: 'per blik 2.99',
        prijs: 2.49,
    },
    {
        title: 'Verse Zeeuwse mosselen',
        beschrijving: '2 kg',
        actie: 'per 2kg 8.69',
        prijs: 6.49,
    }
];

for (let counter = 0; counter < items.length; counter++) {
    const arrayToDisplay = items[counter];

    console.log("Dit is de array van opdr 5 ", arrayToDisplay.title);
    console.log('-------------------');
    console.log("Dit is de array van opdr 5 ", arrayToDisplay.beschrijving);
    console.log('-------------------');
    console.log("Dit is de array van opdr 5 ", arrayToDisplay.prijs);
    console.log('-------------------');
    console.log("Dit is de array van opdr 5 ", arrayToDisplay.actie);
    console.log('-------------------');
}
///////////////

// opdr 9

const container = document.querySelector('.container')

// for (let teller = 0; teller < eatingRecepts.length; teller++) {
//     const products = eatingRecepts[teller];
//     console.log(products.titel);
//     container.innerHTML += '---De titel: ';
//     container.innerHTML += products.titel;
//     container.innerHTML += '---De beschrijving: ';
//     container.innerHTML += products.details;
//     container.innerHTML += '---Gezond: ';
//     container.innerHTML += products.healthy;
    
    
//     return html;
// }
/////////////////

// opdr 10

for (let number = 0; number < items.length; number++) {
    const object = items[number];
    container.innerHTML += createProductHtml(object);
}

function createProductHtml(item) {
    const html = `<div class="card">
                    <h2>${item.title}</h2>
                    <p>${item.beschrijving}</p>
                    <p>${item.actie}</p>
                    <p>${item.prijs}</p> 
                </div>
    `;
    
    return html;
}


// function createProductHtml(items) {
//     const html = `<div class="container">
//                     <h2>${items.title}</h2>
//                     <p>${itmes.price}</p>
//                 </div>`;

//     return html;
// }