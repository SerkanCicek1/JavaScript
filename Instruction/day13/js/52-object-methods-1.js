const person = {
    firstName: 'John',
    lastName: 'Doe',
};

const adam = person;

console.log(adam === person);

adam.firstName = 'Adam';
adam.lastName = 'Smith';

console.log(adam);
console.log(person);

const john = Object.create(person);
console.log(john.firstName);

john.firstName = 'John';

console.log(john);
console.log(john.lastName);
john.lastName = 'Doe';

console.log(john);
console.log(person);

const jane = { ...person };
console.log(jane);
jane.firstName = 'Jane';
jane.lastName = 'Doe';
console.log(jane);
console.log(person);