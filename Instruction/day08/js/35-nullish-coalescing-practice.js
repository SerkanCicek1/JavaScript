// DOM Elementleri

// const yukseklikEl = document.querySelector("#yukseklik");
// const genislikEl = document.querySelector("#genislik");
const resultEl = document.querySelector("#result");

function alanHesapla() {
    const yukseklik = undefined;
    const genislik = 1000;

    // nullish coalescing
    const result = (yukseklik ?? 100) * (genislik ?? 100);

    // if (yukseklik === null || yukseklik === undefined) {
    //     yukseklik = 100;
    // }
    // if (genislik === null || genislik === undefined) {
    //     genislik = 100;
    // }
    // const result = yukseklik * genislik;

    resultEl.innerText = `SONUC: ${result}`
};