const siparisVer = (callback) => {
    console.log("Siparis verildi");
    setTimeout(() => {
        console.log("Siparis hazir");
        callback();
    }, 3000);
};

const yemekYe = (callback) => {
    console.log("Yemege baslandi");
    setTimeout(() => {
        console.log("Yemek yenildi");
        callback();
    }, 2000);
};

const filmIzle = (callback) => {
    console.log("Film basladi");
    setTimeout(() => {
        console.log("Film bitti");
        callback();
    }, 2000);
};

const patlamisMisirYe = () => {
    console.log("Patlamis misir yeniyor");
    setTimeout(() => {
        console.log("Patlamis misir yenildi");
    }, 1000);
};

//callback chaining
siparisVer(() => {
    yemekYe(() => {
        filmIzle(() => { patlamisMisirYe() });
    });
});