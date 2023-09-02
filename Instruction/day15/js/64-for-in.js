"use strict";

const animals = ['dog', 'cat', 'sheep', 'rabbit', 'monkey', 'tiger', 'bear', 'elephant', 'lion', 'zebra'];

const animal = {
    name: 'dog',
    age: 3,
    color: 'brown',
    weight: 20
}

// ARRAY'DE KULLANIMI
for (let i in animals) {
    console.log(i);
    console.log(animals[i]);
};

console.log('-------------------');

// OBJECT'DE KULLANIMI
for (let variable in animal) {
    console.log(variable);
    console.log(animal[variable]);
};