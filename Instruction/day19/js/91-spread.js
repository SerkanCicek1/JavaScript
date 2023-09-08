// ARRAY'LERDE SPREAD OPERATORU
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
console.log(...arr);

// fonksiyonun icerisindeki sayi, array'dekiyle eslesmek zorunda degil. Eslesen kisimlar parametrede karsilik gelen yerlere gonderilir.
const topla = (sayi1, sayi2, sayi3, sayi4, sayi5) => {
    return sayi1 + sayi2 + sayi3 + sayi4 + sayi5;
};

console.log(topla(arr[0], arr[1], arr[2], arr[3], arr[4]));
console.log(topla(...arr));

let cities = ['Ankara', 'Istanbul', 'Izmir', 'Adana', 'Bursa'];
console.log(cities);
cities = ["Antalya", ...cities, "Mersin"];
console.log(cities);

let countries1 = ['Turkey', 'USA', 'England', 'Germany', 'Spain', 'Netherlands'];
let countries2 = ['France', 'Germany', 'Spain', 'Netherlands'];

let countries = [...countries1, "Belgium", ...countries2];
console.log(countries);

// elinizdeki bir array'deki tekrar eden elemanlari silmek icin spread operatorunu "new Set()" ile kullanabilirsiniz.
let uniqueCountries = [...new Set(countries)];
console.log(uniqueCountries);

// OBJELERDE SPREAD OPERATORU
let person = {
    name: "John",
    age: 25,
    salary: 4000
};

const person2 = person;
person2.name = "Mark";
console.log(person);
console.log(person2);

const person3 = { ...person };
person3.name = "Jane";
console.log(person);
console.log(person3);

const person4 = { ...person3, job: "Developer", salary: 5000 };
person4.name = "Emma";
console.log(person3);
console.log(person4);

const people = [
    {
        name: "John",
        age: 25,
        salary: 4000
    },
    {
        name: "Mark",
        age: 30,
        salary: 5000
    },
    {
        name: "Jane",
        age: 35,
        salary: 6000
    }
];

console.log(...people);