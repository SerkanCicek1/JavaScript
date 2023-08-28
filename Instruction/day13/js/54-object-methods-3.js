const car = {
    brand: "Audi",
    model: "A4",
    color: "red",
    year: 2019,
    doors: 4,
    seats: 5,
    engine: "2.0 TDI",
    fuel: "diesel",
    transmission: "Automatic",
    nameWithBrandAndModel: function () {
        return `${this.brand} ${this.model}`;
    },
    price: 20000,
};

console.log(car.nameWithBrandAndModel());

console.log(Object.entries(car));
// [["brand", "Audi"], ["model", "A4"], ["color", "red"], ["year", 2019], ["doors", 4], ["seats", 5], ["engine", "2.0 TDI"], ["fuel", "diesel"], ["transmission", "Automatic"], ["nameWithBrandAndModel", ƒ], ["price", 20000]]

console.log(Object.keys(car));
// ["brand", "model", "color", "year", "doors", "seats", "engine", "fuel", "transmission", "nameWithBrandAndModel", "price"];

console.log(car.length);

const car2 = "Audi A4";

if (car2) {
    console.log("car2 is true");
};

const car3 = {};

if (car3) {
    console.log("car3 is true");
}

if (Object.keys(car).length) {
    console.log("car is true");
}

console.log(Object.keys(car3).length);

if (Object.keys(car3).length) {
    console.log("car3 is true");
}

console.log(Object.values(car));
// ["Audi", "A4", "red", 2019, 4, 5, "2.0 TDI", "diesel", "Automatic", ƒ, 20000]