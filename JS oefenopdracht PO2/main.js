
console.log('...main is loaded...');


// let wordInput = prompt('Raadt het word');
// while (wordInput !== 'student') {
//     alert('probeer opnieuw')
//     wordInput = prompt('Typ opnieuw de word in')

//     if (wordInput == 'quit') {
//         alert('ok')
//         break;
//     }

// }
// alert('mooi zo')

let array = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];

let tempNum = 10
let highest = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > highest) {
        highest = element
        console.log(highest);
    }
    if (element > tempNum) {
        tempNum = element
        console.log('----------------------');
        console.log(tempNum);
    }

    if (element > 10) {
        console.log('de grootste temp boven 10+', element);
    }
}

let arrayObj = [
    {
        month: 'januari',
        temperature: 3.6
    },
    {
        month: 'februari',
        temperature: 3.9
    },
    {
        month: 'maart',
        temperature: 6.5
    },
    {
        month: 'april',
        temperature: 9.9
    },
    {
        month: 'mei',
        temperature: 13.4
    },
    {
        month: 'june',
        temperature: 16.2
    },
    {
        month: 'juli',
        temperature: 18.3
    },

    {
        month: 'augustus',
        temperature: 17.9
    }, {
        month: 'september',
        temperature: 14.7
    }, {
        month: 'oktober',
        temperature: 10.9
    }, {
        month: 'november',
        temperature: 7.0
    },
    {
        month: 'december',
        temperature: 4.2
    }
]

let body = document.querySelector('ul')
for (let i = 0; i < arrayObj.length; i++) {
    const Object = arrayObj[i];
    body.innerHTML += '<li>' + Object.month + '</li>';
    body.innerHTML += '<li>' + Object.temperature + '</li>';
}
for (let counter = 0; counter < arrayObj.length; counter++) {
    const elementOfArray = arrayObj[counter];
    let div = document.querySelector('table')
    div.innerHTML += `
    <tr>
    <td>${elementOfArray.month}</td>
    <td>${elementOfArray.temperature}</td>
    </tr>`;
}

let btnAddButton = document.querySelector('button')
let cardDIsplay = document.querySelector('.second')

btnAddButton.addEventListener('click', function () {
    let userInput = prompt('type jou bericht in')
    cardDIsplay.innerHTML += `<div class="card">${userInput}</div>`;
})


// function showInTable(arrayObj) {
//     const html = `
//     <table>
//     <tr>
//         <th>maand</th>
//         <th>temperature</th>
//     </tr>
//     <tr>
//     <td>${arrayObj.month}</td>
//     <td>${arrayObj.temperature}</td>
//     </tr>
//     </table>
// `

//     return html;
// }


