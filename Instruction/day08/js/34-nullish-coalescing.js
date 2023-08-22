let kullaniciMaasi;
console.log(typeof kullaniciMaasi);

// NULLISH COALESCING
const maas = kullaniciMaasi ?? 3000;
console.log(maas);

// TERNARY 
const maas2 =
    kullaniciMaasi !== null 
    && kullaniciMaasi !== undefined
        ? kullaniciMaasi
        : 3000;

let maas3;

// ESKI YONTEM
if (kullaniciMaasi !== null && kullaniciMaasi !== undefined) {
    maas3 = kullaniciMaasi;
} else {
    maas3 = 3000;
}