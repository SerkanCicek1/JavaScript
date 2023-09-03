const prices = [12, 454, 12, 67, -3, 87, 6, 213];

// every
const everyUnder100 = prices.every((price) => {
    console.log(price);
    return price < 100;
});
console.log(everyUnder100); // false

const everyPositive = prices.every((price) => price > 0);
console.log(everyPositive); // true


// some
const somePositive = prices.some((price) => price > 0);
console.log(somePositive); // true;

const someNegative = prices.some((price) => {
    console.log(price);
    return price < 0;
});

console.log(someNegative); // false;