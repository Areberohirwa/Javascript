// console.log("..main-js..");

// // function definition without parameter
// function sayhello() {
//     console.log("Hallo allemaal..:)")
// }

// // calling function

// sayhello();

// // kilometer definition with parameter
// function saymessage(message) {
//     console.log("Hallo ik ben " + message);
// }

// saymessage("donaold");


// // kilometer definition with more than  1 parameter

// function saypeace(msg1, msg2) {
//     console.log("Hallo mijn voornaam is:" + msg1)
//     console.log("Hallo mijn achternaam is:" + msg2)
// }

// saypeace("Alain", "Hirwa");

// //function with a return value
// function calculateproduct(x, y) {
//     const result = x * y;

//     return result;
// }

// const product1 = calculateproduct(3, 4);
// const product2 = calculateproduct(1234, 789);

// console.log("product of 3 x 4:", product1);
// console.log("product of 1234 x 789:", product2);

// // opdrachten van teams

// opdr 1
function greet() {
    console.log("Hallo wereld..");
}

greet();

// opdr 2
function welcome() {
    document.body.textContent = "welcome bij ROC Mondriaan"
}

welcome();

// opdr 3
function calculatesum(x, y) {
    let result = x + y;

    return result;
}

let sum1 = calculatesum(3, 4);


console.log("het sum is:", sum1);

// opdr 4

function calculatedivision(a, b) {
    let result = a / b;

    return result;
}

let division = calculatedivision(8, 2);

console.log("8 delen door 2=", division);

// opdr 5

function showarrayofnumbers() {
    let priemgetallen = [2, 3, 5, 7, 11]

    console.log("priemgetallen zijn;", priemgetallen)
}

showarrayofnumbers();

// opdr 6

function showarrayofbrands() {
    let brands = ["Tesla", "Volkswagen", "Mercedes", "Peugeot", "Toyota"]

    console.log("De beste auto merk zijn;", brands)
}

showarrayofbrands();

// opdr 7

let computer = 7;
let user = 5;

let input = prompt("type iets in;");
if (input === "hoger" && computer > user) {
    alert('goed gedaan!');
} else if (input === 'lager' && computer < user) {
    alert('niet goed genoeg');
} else {
    alert('Ok !!');
}

function showcodes() {
    console.log(computer + user + input);
}

showcodes();

// opdr 8

function showMessage(Ikbenoud) {
    console.log('Ik wil gewoon zeggen dat ' + Ikbenoud);
}

showMessage('ik te oud bent');

// opdr 9

function showNumbers(Num1, Num2) {
    console.log('dit is nummer ' + Num1 + ' en nummer ' + Num2 + '.  ok !!');
}

showNumbers(1, 2);

// opdr 10

function showSum(sum1, sum2) {
    let sum = x + y;

    return sum;
}

let sum = calculatesum(567, 3);

console.log('dit is de sum', sum);

// opdr 11
function showSum(sum1, sum2) {
    let addit = x + y;

    return addit;
}

let addit = calculatesum(56, 3);

console.log('dit is de sum', addit);

// opdr 12
function concatenateStrings(message1, message2) {
    console.log('Dit is mijn leefttijd' + ' ' + message1 + ' ' + 'mijn lengte' + ' ' + message2 + ' cm.')
}

concatenateStrings(17, 180);

// opdr 13

function showArray(tesla) {
    console.log('de beste model van tesla is ' + tesla);
}

showArray('x');

// opdr 14

let computer_1 = 7;
let player_1 = 5;

let userinput = prompt('type in hoger of lager aub');
function probability(prob1, prob2, prob3) {
    console.log('dit is ' + prob1 + ' en ' + prob2 + ' en last ' + prob3);

    if (userinput === 'hoger' && computer_1 > prob1 + prob2 + prob3) {
        alert(' computer nice.')
    } else if (userinput === 'lager' && player_1 < prob1 + prob2 + prob3) {
        alert(' player nice.')
    } else {
        alert('oooh!!')
    }

}

probability(3, 7, 5);

// opdr 15

function getSum(total1, total2) {
    let total = a + b;

    return total;
}

let addition = calculatesum(78946237, 576883);

console.log('dit is de sum ', addition);

// opdr 17

function getDivision(div1, div2) {
    let divide = d / e;

    return divide;
}

let divi = calculatedivision(3456789, 45);

console.log('dit is de aantwoord;', divi);

// opdr 18

function getConcatenatedStrings(quotes1, quotes2) {
    console.log('Wat denk je ' + quotes1 + 'en aub ' + quotes2);
}
getConcatenatedStrings('over mij', ' bedenk iets en dan zegt het hard op.');

// opdr 19

function getSumOfArray(le1) {
    let array = [1, 2, 3, 4, 5];

    let result = array.reduce((a, b) => {
        return a + b;
    });

    console.log(result);
}

getSumOfArray(0);
////////////////////////////

const container = document.querySelector('.container');

function createmessagebox(paragraf) {
    const html = '<div class="message-box"> amarura</div>'; 

    return html;
}

container.innerHTML += createmessagebox('Dit is bericht 1');
container.innerHTML += createmessagebox('Dit is bericht 2');
container.innerHTML += createmessagebox('Dit is bericht 3');