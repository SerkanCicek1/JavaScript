let foo = function () {
    let x = 5;
    console.log(`x degeri fonksiyon icerisinden  erisilebilir: ${x}`);
}

foo();
// console.log(`x degeri fonksiyon disindan erisilemez: ${x}`);

let y = 5;
const foo1 = function () {
    console.log(`y degeri fonksiyon icerisinden  erisilebilir: ${y}`);
};

foo1();
console.log(`y degeri fonksiyon disinda: ${y}`);

const a = 10;
// fonksiyon scope  1.seviye
const foo2 = function () {
    console.log(`a degeri fonksiyon icerisinden  erisilebilir: ${a}`);
    const b = 15;

    // fonksiyon scope  2.seviye
    const bar = function () {
        console.log(`a degeri bar fonksiyonu icerisinden  erisilebilir: ${a}`);
        console.log(`b degeri bar fonksiyonu icerisinden  erisilebilir: ${b}`);
        const c = 20;
    }
    bar();
    // console.log(`c degeri fonksiyon icerisinden  erisilemez: ${c}`);
};

foo2();
// console.log(`b degerine fonksiyon disinda erisilemez: ${b}`);

const param = 10;

const foo3 = function (param) {
    console.log(param);
}

foo3();
console.log(param);

let sayi = 3;
const bar = function () {
    let sayi = 7;
    console.log(`Fonksiyon ici:  ${sayi}`);
};

bar();
console.log(`Fonksiyon disi: ${sayi}`);


let sayi1 = 3;
const fonksiyon = function () {
    sayi1 = 7;
    console.log(`sayi1: ${sayi1}`);
};

fonksiyon();
console.log(`sayi1: ${sayi1}`);

let sayi2 = 3;
const fonksiyon1 = function () {
    let sayi2 = 7;
    console.log(`sayi2: ${sayi2}`);
    sayi2 += 5;
    console.log(`sayi2: ${sayi2}`);
}

fonksiyon1();
console.log(`sayi2: ${sayi2}`);

// BLOCK SCOPE;

const foo4 = function (param) {
    if (param < 0) {
        let negative = true;
    }
    console.log(negative);
};

foo4(-4);