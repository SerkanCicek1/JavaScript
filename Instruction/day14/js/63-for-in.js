/*

for (let i = 0; i < arr.length; i++) {}

for (i in arr) {}

*/

const firstNames = ['John', 'Jane', 'Jack', 'Jim', 'Jill'];
const lastNames = ['Smith', 'Doe', 'Sparrow', 'Beam', 'Hill'];

// const combinedName = ["John Smith", "Jane Doe", "Jack Sparrow", "Jim Beam", "Jill Hill"]

const combineNames = (arr1, arr2) => {
    const combinedName = [];
    for (index in arr1) {
        combinedName.push(`${arr1[index]} ${arr2[index]}`)
    };
    return combinedName;
};

console.log(combineNames(firstNames, lastNames));