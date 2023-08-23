// DOM ELEMENTS
const inputEl = document.querySelector("#input1");
const paragraphEl = document.querySelector("#paragraph");

function calculate() {
    let sayi = inputEl.value === 0 ? 1 : inputEl.value;

    if (sayi < 0) {
        alert("Negatif sayı giremezsiniz!");
        return;
    }

    let faktoriyel = 1;

    // 5! = 5 * 4 * 3 * 2 * 1

    do {
        faktoriyel = faktoriyel * sayi;
        sayi--;
    } while (sayi > 1)

    paragraphEl.innerText = `FAKTORIYEL: ${faktoriyel}`
};