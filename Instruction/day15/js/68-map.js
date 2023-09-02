const names = ['John', 'Jane', 'Joe', 'Jack', 'Jill'];

const upperCaseNames = names.map((firstName, index) => {
    console.log(firstName.toUpperCase())
    return firstName.toUpperCase();
});

console.log(names);
console.log(upperCaseNames);