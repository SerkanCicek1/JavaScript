/* 

1 - 2 tane input olacak
2 - 1 tane buton olacak
3 - input'lar  sayi degeri alacak
4 - butona tiklandiginda inputlardaki degerler toplayacak bir fonksiyon olusturulacak
5 - toplam sonucu baska bir sonuc etiketi icine yazdirilacak

*/

// DOM'A ERISIM
const inputEl1 = document.querySelector("#sayi1");
const inputEl2 = document.querySelector("#sayi2");
const sonucEl = document.querySelector("#sonuc");

function topla() {
    const toplam = +inputEl1.value + +inputEl2.value;
    // const toplam = Number(sayi1) + Number(sayi2);

    sonucEl.innerText = `TOPLAM: ${toplam}`;

    // clear
    inputEl1.value = "";
    inputEl2.value = "";

};