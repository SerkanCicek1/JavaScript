const tryPriceList = [24000, 15000, 6000, 18000, 3000, 9000];

const usd = 26.54;
const eur = 28.69;

const usdPriceList = tryPriceList.map((price) => {
    return (price / usd).toFixed(2);
});

const eurPriceList = tryPriceList.map((price) => {
    return (price / eur).toFixed(2);
})

console.log(usdPriceList);
console.log(eurPriceList);

// DOM ELEMENTS

const tryListEl = document.querySelector("#try");
const usdListEl = document.querySelector("#usd");
const eurListEl = document.querySelector("#eur");

tryListEl.innerHTML = tryPriceList.join("₺, ") + "₺";
usdListEl.innerHTML = usdPriceList.join("$, ") + "$";
eurListEl.innerHTML = eurPriceList.join("€, ") + "€";