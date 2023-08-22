const user1 = {
    name: "John",
    age: 30,
    salary: {
        amount: 3000,
        currency: 'USD',
    },
};

const user2 = {
    name: "Jane",
    age: 25,
    salary: {
        amount: 5000,
        currency: 'USD',
        tax: {
            total: 500,
        }
    },
}

console.log(user1);
console.log(user1.salary);
console.log(user1.salary.tax);
console.log(user1.salary.tax?.rate);
console.log(user1.salary.tax?.rate.value);

console.log(user2);
console.log(user2.salary);
console.log(user2.salary.tax);
console.log(user2.salary.tax.rate);
console.log(user2.salary.tax.rate?.value);

console.log(user1.salary.tax?.rate?.value);