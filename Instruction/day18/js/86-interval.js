// DOM ELEMENTS
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const pricesEl = document.getElementById("prices");

// VARIABLES
let interval = null;

btnStart.addEventListener("click", () => {
    // tekrar tekrar calistirmaya engel olmasi icin bu kontrolu yapiyoruz
    if (interval) return;

    interval = setInterval(() => {
        const price = Math.floor(Math.random() * 4000) + 1000;
        pricesEl.innerHTML += `<li>${price}</li>`;
    }, 1000);
});

btnStop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});