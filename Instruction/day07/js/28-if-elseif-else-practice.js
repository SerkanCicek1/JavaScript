const priceInputEl = document.querySelector('#priceInput');
const resultEl = document.getElementById("result");


function calculateDiscount() {
    let result = +priceInputEl.value;

    if (result > 500) {
        result *= 0.9;
        // result = result * 0.9;
        // result = result - (result * 0.1);
        // result = result - (result * 10 / 100);
    } else if (result > 300) {
        result *= 0.93;
        // result = result * 0.93;
        // result = result - (result * 0.07);
        // result = result - (result * 7 / 100);
    } else {
        result *= 0.95;
        // result = result * 0.95;
        // result = result - (result * 0.05);
        // result = result - (result * 5 / 100);
    }

    resultEl.innerText = `SONUC: ${result}`;
};