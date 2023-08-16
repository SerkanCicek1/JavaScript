/*

1 - sayfada bir input ve bir buton olacak
2 - input kullanicidan fiyat bilgisi alacak
3 - butona tiklandiginda fiyat bilgisine indirim uygulayacak bir fonksiyon calistirilacak
4 - indirim fonksiyonu, girilen fiyatin 500'un uzerinde olmasi durumunda 10%, diger durumlarda 5%'lik bir indirim uygulayacak
5 - cikan sonucu sayfa icerisinde bir elementin icine yazdiracak

*/


function calculateDiscount() {

    // DOM ERISIMI
    const priceEl = document.querySelector("#price");
    const discountedPriceEl = document.querySelector("#discountedPrice");

    let price = priceEl.value;

    if (price > 500) {
        price *= 0.9;
        // price = price * 0.9;
        // price = price - (price * 0.1);
        // price = price - (price * 10 / 100);
    } else {
        price *= 0.95;
        // price = price * 0.95;
        // price = price - (price * 0.05);
        // price = price - (price * 5 / 100);
    }

    discountedPriceEl.innerText = `INDIRIMLI FIYAT: ${price}`;


    // clear input
    priceEl.value = "";

};