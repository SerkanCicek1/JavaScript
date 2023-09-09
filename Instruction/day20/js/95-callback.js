function siparisVer(callback) {
    console.log("Siparişiniz alındı.");
    const x = 10;
    const y = 20;
    console.log("Siparişiniz hazırlanıyor.");
    setTimeout(() => {
        console.log("Siparişiniz hazır.")
        callback();
    }, 4000);

};

siparisVer(() => {
    console.log("Siparişiniz teslim edildi.");
});

const farkiBul = (a, b, callback) => {
    setTimeout(() => {
        const fark = Math.abs(a - b);
        callback(fark);
    }, 3000);
};

farkiBul(20, 10, (param) => {
    console.log("Fark: " + param)
});