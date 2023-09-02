const products = [
    { id: 1, name: 'laptop', price: 20000 },
    { id: 2, name: 'mobile', price: 10000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'headphone', price: 1000 },
    { id: 5, name: 'mouse', price: 500 },
    { id: 6, name: 'keyboard', price: 300 },
    { id: 7, name: 'mousepad', price: 150 },
    { id: 8, name: 'headset', price: 150 },
    { id: 9, name: 'earphone', price: 150 },
    { id: 10, name: 'speaker', price: 150 },
];


const zamliPrices = products.map((product) => {
    const newProduct = { ...product };
    if (newProduct.price > 1500) {
        newProduct.price *= 1.1;
    } else {
        newProduct.price *= 1.15;
    }
    return newProduct;
});

console.log(products)

console.log(zamliPrices);