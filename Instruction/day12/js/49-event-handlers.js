// 1. YONTEM
function clicked1(e) {
    console.log("1. Butona Tiklandi");
}

// 2. YONTEM
const btn2 = document.querySelector("#btn2");
btn2.onclick = clicked2;

function clicked2(e) {
    console.log("2. Butona Tiklandi");
}

// 3. YONTEM
const btn3 = document.querySelector("#btn3");
btn3.onclick = function (e) {
    console.log(e.target);
    console.log("3. Butona Tiklandi");
}

// btn3.onclick = (e) => console.log("3. Butona Tiklandi");

// 4. YONTEM
const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", clicked4);

function clicked4(e) {
    console.log("4. Butona Tiklandi");
}


// 5. YONTEM
const btn5 = document.querySelector("#btn5");

btn5.addEventListener("click", function (e) {
    console.log("5. Butona Tiklandi");
});

// btn5.addEventListener("click", (e) => console.log("5. Butona Tiklandi"));