console.log('main is loaded!!!');

let bitcoin = [40604, 40648, 38275, 30386, 39445, 39121, 38494]

console.log(bitcoin);

for (let index = 0; index < bitcoin.length; index++) {
    const element = bitcoin[index];
    if (index == 3) {
        console.log('dit is de gemiddelste bitcoin waarde: ', element);
    }
    if (index == 1) {
        console.log('dit is de hoogste bitcoin waarde: ', element);
    }
    if (index == 3) {
        console.log('dit is de laagste bitcoin waarde: ', element);
    }
}

// opdr 2

let jobInfos = [
    {
        job: 'Aptheker',
        startingSalary: 3450
    },
    {
        job: 'Automonteur',
        startingSalary: 2000
    },
    {
        job: 'Bouwvakker',
        startingSalary: 1650
    },
    {
        job: 'Electrician',
        startingSalary: 2200
    },
    {
        job: 'Kinderopvang',
        startingSalary: 1890
    },
    {
        job: 'Metselaar',
        startingSalary: 2400
    },
    {
        job: 'Timmerman',
        startingSalary: 2300
    }
];

let lowest = 9000;
let highest = 0;
for (let i = 0; i < jobInfos.length; i++) {
    const jobsInformation = jobInfos[i];
    if (i == 3) {
        console.log('de gemidelde salary ', jobsInformation.startingSalary);
    }
    if (jobsInformation.startingSalary > highest) {
        highest = jobsInformation.startingSalary
        console.log('dit is de highest = ', highest);
    }
    if (jobsInformation.startingSalary < lowest) {
        lowest = jobsInformation.startingSalary
        console.log('dit is de lowest = ', lowest);
    }
}
let totalSalary = jobInfos[0].startingSalary + jobInfos[1].startingSalary + jobInfos[2].startingSalary + jobInfos[3].startingSalary + jobInfos[4].startingSalary + jobInfos[5].startingSalary + jobInfos[6].startingSalary;
console.log('de totale van alle Salaries = ', totalSalary);

// opdr 3

let userNameInput = document.querySelector('.username-input');
let userEmailInput = document.querySelector('.email-input');
let sendBtn = document.querySelector('.Send');

sendBtn.addEventListener('click', function () {
    let name = userNameInput.value;
    let email = userEmailInput.value;

    if (name.length < 3) {
        userNameInput.classList.add('wrongusername-input')
    } else {
        userNameInput.classList.add('goodusername-input')
    }

    if (email.length > 0) {
        userEmailInput.classList.add('goodemail-input')
    } else {
        userEmailInput.classList.add('wrongemail-input')
    }
})

// opdr 4

fetch('https://fakestoreapi.com/products/').then((products) => products.json())
.then((objData) => {
    console.log('de data ',objData)
    const infos = objData;

    for (let counter = 0; counter < infos.length; counter++) {
        const objectsInfo = infos[counter];
        let bodyEl = document.querySelector('.card-container')
        let htmlCodes = carsDisplay(objectsInfo);
        bodyEl.innerHTML += htmlCodes;
    }
    
})

function carsDisplay(objectsInfo) {
    let htmlCode = `
    <div class="cards">
    <img src="img/Product_sample_icon_picture.png">
    <h3>${objectsInfo.title}</h3>
    <h3>${objectsInfo.price}</h3>
    <h3>${objectsInfo.description}</h3>
</div> `;

return htmlCode;
}
