const people = ["Aaron", "Mel", "John", "Louis"];
const animals = ["dog", "cat", "bat", "octopus", "chinchilla", "ant", "cheetah"];

const checkIfStartsWithLetter = (letter, arr) => {
    const arrayFiltered = arr.filter((item) => {
        const lowercaseItem = item.toLowerCase();
        return lowercaseItem.startsWith(letter);
    });
    return arrayFiltered;
};

console.log(checkIfStartsWithLetter("j", people));
console.log(checkIfStartsWithLetter("c", animals));

// DELETING ITEMS FROM AN ARRAY
const deleteItemFromArray = (item, arr) => {
    const arrayFiltered = arr.filter((element) => {
        return element !== item;
    })
    return arrayFiltered;
};

console.log(deleteItemFromArray("Mel", people));