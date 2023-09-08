const person = {
    name: "John",
    age: 25,
    salary: 4000,
    lastName: "Doe",
    address: {
        city: "Istanbul",
        district: "Kadikoy",
        street: "Caferaga"
    },
    skills: ["JS", "Java", "C#", "Python"]
};

// KLASIK YONTEM
const message1 = `${person.name} isimli kisinin yasi ${person.age} ve maasi ${person.salary} USD'dir.`;
console.log(message1);

// DESTRUCTURE YONTEMI
let { name, age, salary, skills, address } = person;
console.log(`${name} isimli kisinin yasi ${age} ve maasi ${salary} USD'dir.`);

age = "Ahmet";
console.log(person);

let name2 = person.name;
name2 = "Mehmet";
console.log(person);
skills = ["JS", "Java", "C#", "Python", "C++"];
skills[0] = "JavaScript";
console.log(person);
address.city = "Ankara";
console.log(person);

const myArr = ["JS", "Java", "C#", "Python", "C++"];
const [a, b, c, d, e, f] = myArr;
const [state, setState] = ["Ankara", function () { }];

// 

const person1 = {
    name1: "Jane",
    lastName1: "Doe",
    age1: 20,
    salary1: 7000,
};

const { name1, lastName1, age1 } = person1;

const sayHello = (funcName, funcLastName, funcAge) => {
    console.log(`Hello ${funcName} ${funcLastName}`)
};

sayHello(name1, lastName1, age1);

const sayHello2 = ({ name1, lastName1, age1 }) => {
    console.log(`Hello ${name1} ${lastName1} - ${age1}`)
};

sayHello2(person1);

const students = [
    { id: 1, name1: "John", age1: 25 },
    { id: 2, name1: "Jane", age1: 24 },
    { id: 3, name1: "Susan", age1: 23 },
    { id: 4, name1: "Chris", age1: 22 },
    { id: 5, name1: "Tom", age1: 21 },
]

students.forEach((student) => {
    sayHello2(student);
});