// console.log("..main.js is loaded");

// let counter = 0;
// while( counter < 10) {
//     console.log("counter is", counter);

//     // counter = counter + 1;
//     // counter += 1;
//     counter++;
// }
// console.log('Einde loop'); 


//opdr. 1

console.log("..main.js is loaded");

let counter = 0;
while (counter < 10) {
    console.log("counter is", counter);

    counter++;
}
console.log('Einde loop');

// opdr. 2
let number = 2;
while (number < 21) {
    console.log("number is", number);

    number++;
}
console.log('einde programma');

//opdr. 3
let count = 10;
while (count >= 0) {
    console.log("count is", count);
    count--;
};
console.log('einde programma');

//opdr.4
let counting = 40;
while (counting >= 4) {
    console.log("counting is", counting);

    counting--;
};
console.log('einde programma');

//opdr.5
let display = 0;
while (display < 9) {
    console.log("Ik ben een student van ROC Mondriaan", display);

    display++;
};
console.log('einde programma');

//opdr.6
let ary = 0;
while (ary <= 12) {
    console.log('Dit is loop:', ary);

    ary++;
};
console.log('einde programma');

//opdr.7
let infinity = 0;
while (true) {
    console.log('dit is oneindigde loop', infinity);
    infinity++;
    if (infinity >= 9) {
        break
    }
};
console.log('einde programma');

//opdr.8 hoef geen break te gebruiken.
let next_loops = 20;
while (next_loops >= 10) {
    console.log("dit is loop;", next_loops);
    next_loops--;

};
console.log('einde programma');

//opdr.9
let numbers = 0;
while (true) {

    numbers++;

    if(numbers > 20)
        break;

    console.log("Dit is mijn huiswerk", numbers);

    if(numbers > 10)
        continue;

    console.log("Dit zijn while loops", numbers);
};
console.log('einde programma');