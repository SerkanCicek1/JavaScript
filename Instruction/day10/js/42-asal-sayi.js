// DOM ELEMENTS
const inputEl = document.getElementById("num");
const resultEl = document.getElementById("result");

// FUNCTIONS

function control() {
    const result = asalSayiMi(+inputEl.value);
    inputEl.value = "";
    inputEl.focus();
    if (result === "error") {
        resultEl.innerHTML = `<span style="color:red">
            *Lütfen geçerli bir sayı giriniz. 
        <span>`
    } else {
        resultEl.innerText = `Girmiş olduğunuz sayı ${result ? "asal sayıdır" : "asal sayı değildir"}`
    }
}

// function isPrime() {};
function asalSayiMi(sayi) {
    if (!sayi || isNaN(sayi) || sayi < 2) return "error";

    if (sayi === 2) return true;

    if (sayi % 2 === 0) return false;

    let karekok = Math.sqrt(sayi);
    for (let i = 3; i <= karekok; i += 2) {
        if (sayi % i === 0) {
            return false;
        }
    };

    return true;
};