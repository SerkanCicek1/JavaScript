const animals = ['cat', 'dog', 'horse', 'sheep', 'bird'];
const numbers = [20, 30, 40, 50, 60, 70, 80, 90, 100];

const foo = (animal, index) => {
    console.log(animal, index)
};

animals.forEach(foo);

// yeni bir array olustur ve  her bir elemanin 2 kati olsun
numbers.forEach((number, index) => {
    numbers[index] = number * 2;
})

const newNumbers = [-28, 35, 36, 48, 49];

const multiplied = [];

newNumbers.forEach((number, index) => {
    // multiplied[index] = number * 5;
    multiplied.push(number * 5);
})

console.log(multiplied);