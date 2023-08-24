// function declaration
function add(a, b) {
    return a + b;
};

// function expression
const add2 = function (a, b) {
    return a + b;
};

// arrow function
const add3 = (a, b) => a + b;
// const add3 = (a, b) => {
//      return a + b;
// };


const result = add(5, 6);
const result2 = add2(8, 10);
const result3 = add3(10, 20);


console.log(result);
console.log(result2);
console.log(result3);