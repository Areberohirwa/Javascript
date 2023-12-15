console.log('main is loaded');

let information = [
    {
        firstName: 'Iss',
        lastName: 'Van Diesel',
        hobby: 'Basketball'
    }, {
        firstName: 'John',
        lastName: 'Travolta',
        hobby: 'Acting'
    }
]
let divDisplay = document.querySelector('.container');
for (let index = 0; index < information.length; index++) {
    const element = information[index];
    
    const htmlDisplay = displayOn(element);

    divDisplay.innerHTML += htmlDisplay;
}

function displayOn(information) {
    const htmlCode = `
    <div class="card">
    <h4>${information.firstName}</h4>
    <h4>${information.lastName}</h4>
    <h4>${information.hobby}</h4>
</div>`;

    return htmlCode;
}

// opdr 2

let carInfos = {
    Brand: 'Tesla',
    model: 's',
    dateOfManufacture: 2017,
    price: 50000
}

let carInfos2 = {
    Brand: 'Tesla',
    model: 'x',
    dateOfManufacture: 2019,
    price: 48000
}

let cars = [
    {
        Brand: 'Tesla',
        model: 'x',
        dateOfManufacture: 2019,
        price: 48000
    },
    {
        Brand: 'Tesla',
        model: 's',
        dateOfManufacture: 2017,
        price: 50000
    }
]

for (let i = 0; i < cars.length; i++) {
    const carsInfo = cars[i];
    let div = document.querySelector('.wrapper')
    let divDisplayOfCars = displayOnCars(carsInfo)
    div.innerHTML += divDisplayOfCars;
}

function displayOnCars(cars) {
    const htmlCodes = `
    <div class="cards">
    <h4>${cars.Brand}</h4>
    <h4>${cars.model}</h4>
    <h4>${cars.dateOfManufacture}</h4>
    <h4>${cars.price}</h4>
</div>`;

    return htmlCodes;
}

// opdr 3

let studentInformation = [
    {
        firstName: 'Iss',
        lastName: 'Van Diesel',
        course: 'ICT'
    }, {
        firstName: 'John',
        lastName: 'Travolta',
        course: 'ICT'
    }
]

for (let counter = 0; counter < studentInformation.length; counter++) {
    const studentInfos = studentInformation[counter];
    let studentDisplay = document.querySelector('.infos')
    studentDisplay.innerHTML += '<h4>'+studentInfos.firstName + '</h4>';
    studentDisplay.innerHTML += '<h4>'+studentInfos.lastName + '</h4>';
    studentDisplay.innerHTML += '<h4>'+studentInfos.course + '</h4>';
}

// opdr 4

fetch('https://meme-api.com/gimme/5').then((credits) => credits.json())
  .then((objData) => {
    console.log('Ontvang objdata: ', objData);
    const products = objData.memes;
    console.log('de 5 memes: ', products);


    for (let counter = 0; counter < products.length; counter++) {
      const objDatasProperty = products[counter];
      console.log('products Zijn: ', objDatasProperty);

    }
  })

  function displayOnMemes(objDatasProperty) {
    const html = `<div class="memes">
    <h4>${objDatasProperty.}</h4>
    <h4>${objDatasProperty.}</h4>
    <h4>${objDatasProperty.}</h4>
    <h4>${objDatasProperty.}</h4>
    <h4>${objDatasProperty.}</h4>
    <h4>${objDatasProperty.}</h4>
    <h4>${objDatasProperty.}</h4>
    <h4>${objDatasProperty.}</h4>
</div>
`;

    return html;
}
