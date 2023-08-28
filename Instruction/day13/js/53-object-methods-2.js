const car1 = {
    brand: "Audi",
    model: "A8",
    color: "black",
    model: "A6"
};

console.log(car1);

const car2 = {
    brand: "BMW",
    year: 2019,
};

Object.assign(car1, car2);
console.log(car1);
console.log(car2);
console.log(car1 === car2);

const car3 = Object.assign(car1, car2);
console.log(car3);
console.log(car1 === car3);

// car3.brand = "Mercedes";
// console.log(car1);

const car5 = {
    new: "new"
}

const car4 = Object.assign({}, car1, car5);
console.log(car4);
console.log(car4 === car1);
console.log(car1);