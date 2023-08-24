// DOM ELEMENTS
const inputEl = document.querySelector("#birthdate");

function getAge() {
    console.log(`I'm ${2023 - 1995} years old`);
}

getAge();

const thisYear = 2023;


function getAge1() {
    const birthYear = +inputEl.value;
    console.log(`I'm ${thisYear - birthYear} years old`)
};

function getAge2(year, birth, name) {
    console.log(`I'm ${year - birth} years old`)
    console.log(`My name is ${name ?? "Anonymous"}`);
};

getAge2(2023, 1995, "John");

getAge2(2020, 1990, "Jane");

getAge2(2023, 1995);

function topla(a, b) {
    console.log(a + b);
};

topla(5, 10);

function toplaDefaultDegerli(x = 0, y = 0) {
    // if (x && y) {
    //     console.log(x + y);
    // }
    console.log(x + y);
    // x = 5, y = undefined => NaN
};

toplaDefaultDegerli(5, 15);
toplaDefaultDegerli(5);
toplaDefaultDegerli();

function yasHesapla(dogumYili) {
    return 2023 - dogumYili;
}

const myAge = yasHesapla(1995);

if (myAge < 30) {
    console.log("Kucuk");
} else {
    console.log("Buyuk");
}