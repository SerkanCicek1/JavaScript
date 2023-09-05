const sayHello5 = () => {
    console.log("Hello 5 saniye sonra calisacak fonksiyon");
};

// sure girilmeden de yazilabili
setTimeout(() => {
    console.log("Burasi butun JavaScript kodlari calistiktan sonra calisir. Cunku timeout yapisi asenkron calisir.")
});

// geriye timeout Id'si dondurur, dondurulen bu id ile timeout durdurulabilir
const timeoutId = setTimeout(sayHello5, 5000);
console.log("Once ben calisirim");

setTimeout(() => {
    document.querySelector("h1").innerText = "3 saniye sonra calisti"
}, 3000);



console.log("Ikinci ben calisirim");

console.log(timeoutId);

clearTimeout(timeoutId);