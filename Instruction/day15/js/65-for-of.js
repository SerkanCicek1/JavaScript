const hayvanlar = ['dog', 'cat', 'sheep', 'rabbit', 'monkey', 'tiger', 'bear', 'elephant', 'lion', 'zebra'];

const animal = {
    name: 'dog',
    age: 3,
    color: 'brown',
    weight: 20
};

for (let index in hayvanlar) {
    console.log(index);
}

// ["name", "dog"] = [key, hayvan];

// ARRAY'DE KULLANIMI
for (let hayvan of hayvanlar) {
    console.log(hayvan);
    console.log(hayvanlar.indexOf(hayvan));
};

for (let [index, hayvan] of hayvanlar.entries()) {
    console.log(index, hayvan);
};

// OBJECT'DE KULLANIMI
for (let [key, info] of Object.entries(animal)) {
    console.log(key, info);
};

for (let letter of "JavaScript") {
    console.log(letter);
}

// ARRAY'I STRING HALE GETIRMEK
let arabalar = ['BMW', 'Mercedes', 'Opel', 'Mazda'];
let str = "";

for (let araba of arabalar) {
    console.log(araba);
    str += araba + ", ";
}

console.log(str);
console.log(arabalar.join(", "))