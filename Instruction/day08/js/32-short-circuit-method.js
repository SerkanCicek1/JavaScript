console.log("hello");

const x = 5;
const y = 4;
const z = 14;

console.log(x > y && z > y && y != 4);
console.log(x > y && "Sol taraf truthy bir degerse burasi gorunur olacak");
console.log(x < y && x);
console.log(x > y && z > y && y);
console.log(x > y && x && y);

const a = 5;
const b = 0;

console.log(a > b && b > 5 && a);

// z > 5 && z < 25 && alert("z 5 ile 25 arasinda");

if (a > b && a > 3 && a < 10) {
    console.log("Butun senaryonlar tuttu")
}

a > b && a > 3 && a < 10 && console.log("Butun senaryonlar tuttu");

const kullaniciSayisi = 0

const sayi = kullaniciSayisi || "Kullanici sayisi bulunamadi"

console.log(sayi);


// SENARYO 1
const isLoggedIn = true;
const userName = "";


(isLoggedIn || userName) && console.log("Kullanici giris yapti");

// SENARYO 2
const username = "admin";
const password = "1234";

const returnIfadesi = username === "2" && password === "1234" && "Giris basarili";

console.log(returnIfadesi);