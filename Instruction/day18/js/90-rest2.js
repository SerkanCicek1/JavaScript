const ortalamayiBul = (ad, soyad, ...notlar) => {
    const toplamNot = notlar.reduce((toplam, not) => toplam + not, 0);
    const ortalama = (toplamNot / notlar.length).toFixed(2);

    return `${ad} ${soyad} isimli öğrencinin ortalaması: ${ortalama}`;
};


console.log(ortalamayiBul("Ali", "Can", 100, 90, 80, 70, 60, 50, 40, 30, 20, 10));
console.log(ortalamayiBul("John", "Doe", 70, 80, 90, 100, 60));