/*

 1 - Bir input ve buton olusturun
 2 - Butona tiklandiginda hesaplama islemi yapan bir fonksiyon yazin
 3 - hesaplama isleminde input elementinin degerini alin
 4 - alinan degerin mutlak degeri alin
 5 - toplam adinda bir degisken olusturun ve 0'dan baslatin
 6 - kullanicidan alinan deger 0'a esit olana kadar devam edecebk bir dongu olusturun
 7 - belirtilen degerin son basamagini alin ve toplam degiskenine ekleyin
 8 - sayidaki son basamagi silin
 9 - bu islemi sayi 0'a esit olana kadar tekrar edin
 10 - cikan sonucu sayfada yazdirin

*/

const num1El = document.querySelector('#num1');

function calculate() {
    let sayi = Math.abs(num1El.value);
    let toplam = 0;

    while (sayi > 0) {
        const sonBasamak = sayi % 10;
        toplam = toplam + sonBasamak;
        // sayida degisiklik yap
        console.log();
        sayi = Math.floor(sayi / 10);
    }

    alert(toplam);
};