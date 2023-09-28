// let shoplist =["bruin brood", "melk", "kaas", "koffie", "boter."];
// shoplist.unshift

// let list = [];
// console.log("list is: ");
// list.push(6);
// console.log("list met push()", list);

// list.push(124);
// console.log("list met push()", list);

// list.push(-12);
// console.log("list met push()", list);

// console.log("list met push()", list.length);

// const brands = ["mercedes", "tesla", "Audi", "BMW"];
// console.log("lijst met automerken", brands);

// brands.push("Fiat");
// console.log(" update lijst met automerken", brands);

// brands.pop();
// console.log("lijst met automerken", brands);

let x = [4, 5, 8, 12, -1, 99];
console.log("lijst met alle array's", x);
////////////////////

let y = [0.33, 4.8, 11.1, 34.5, 129.1, -2.56, -17.4];
console.log("lijst met array's", y);
////////////////////

let color = ["rood", "groen", "geel", "blauw", "roze"];
console.log("Array's met kleuren", color);
////////////////////

x[3] = 21;
console.log('new array', x);
/////////////////

y[0] = 3.3;
y[6] = -1.74;
console.log("nieuwe aangepaste array;", y);
////////////////

color[3] = "paars";
console.log("nieuwe array met paars;", color);
////////////////

color.push = "zwart";
console.log("niuewe array met zwart;", color);
///////////////

y.shift()
console.log("nieuwe lijst met shift;", y);
/////////////

y.unshift()
console.log("niuewe lijst met unshift", y);
////////////

//Maak een prompt waarbij de gebruiker een naam van een film invult.
//Als de gebruiker op OK klikt, dan wordt de naam als list-item in een <ul></ul> toegevoegd.Doe dit 4 keer achter elkaar.

const filmname = prompt("type in de naam van de film;");
let movie = document.querySelector('ul');
movie.innerHTML = filmname;
/////////////

let filnme = prompt("type in de naam van de film;");
let film = document.querySelector('ul');
film.innerHTML += filnme;
/////////////

const fimname = prompt("type in de naam van de film;");
let movies = document.querySelector('ul');
movies.innerHTML += fimname;
/////////////

const filmnam = prompt("type in de naam van de film;");
let nam = document.querySelector('ul');
nam.innerHTML += filmnam;
/////////////