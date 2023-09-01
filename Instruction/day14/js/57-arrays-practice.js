const numbers = [12, 56, 14, 67, 89, 33, 22];

// METHOD 1
const getMaxNumber = (arr) => {
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
};

console.log(getMaxNumber(numbers));

// METHOD 2
// bir array'deki maximum sayiyi bulan Math yontemi
const max = Math.max(...numbers);
console.log(max);