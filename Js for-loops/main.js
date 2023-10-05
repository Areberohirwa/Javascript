// const todos =["trainen", "huiswerk maken", "boodschappen doen", "film kijken"];
// for(let m = 0; m<todos.length; m++) {
//     const task = todos[m];
//     console.log("---" + task + "---");
// }


//opdr 1
for (let i = 0; i < 10; i++) {
    console.log("for-loops:", i)
}
console.log("Einde programma");

// opdr 2
for (let counter = 0; counter <= 20; counter++) {
    console.log("for-loops", counter)
}
console.log("einde programma");

// opdr 3
for (let counter = 2; counter <= 20; counter++) {
    console.log("for-loops", counter)
}
console.log("einde programma");

// opdr 4
for (let counter = 10; counter >= 0; counter--) {
    console.log("for-loops", counter)
}
console.log("einde programma");

// opdr 5
for (let counter = 40; counter >= 4; counter--) {
    console.log("for-loops", counter)
}
console.log("einde programma");

//opdr 6
for (let i = 0; i <= 8; i++) {
    console.log("Ik ontwikkel apps:", i)
}
console.log("Einde programma");

// opdr 7
for (let i = 1; i < 12; i++) {
    console.log("dit is loop:", i)
}
console.log("Einde programma");

// opdr 8
let counter = 0;
for (; ;) {
    counter++;
    console.log("for-loops:", counter)
    if (counter <= 9)
        break;
}
console.log("Einde programma");

//opdr 15
let numbers = 0;
while (true) {
    numbers++;
    if (numbers > 20)
        break;
    console.log("Dit is mijn huiswerk", numbers);
    if (numbers > 10)
        continue;
    console.log("Dit zijn for-loops", numbers);
};
console.log('einde programma');

