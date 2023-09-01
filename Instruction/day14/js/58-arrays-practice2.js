const prices = [123, 5666, 126, 67];

const updatePrices = (arr, rate) => {
    let updatedPrices = [];
    for (let i = 0; i < arr.length; i++) {
        updatedPrices[i] = Math.round(arr[i] + (arr[i] * rate / 100));
    }
    return updatedPrices;
};

console.log(updatePrices(prices, 20));