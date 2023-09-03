const arr = [23, 5, 74, 7];

const sum = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
}, 0);

console.log(sum);

const multiply = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc * cur;
}, 1);

console.log(multiply);

const max = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return Math.max(acc, cur);
})

console.log(max);