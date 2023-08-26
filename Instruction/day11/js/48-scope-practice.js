// ACCESS DOM ELEMENTS
const txtNum = document.getElementById("txtNum");
const btnStart = document.getElementById("btnStart");
const btnGuess = document.getElementById("btnGuess");
const txtResult = document.getElementById("txtResult");

// GLOBAL VARIABLES
let randomNumber = 0;
const minRandomNumber = 20;
const maxRandomNumber = 80;
const totalShot = 10;

// FUNCTION DEFINITIONS
const startGame = () => {
    randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    txtNum.removeAttribute("disabled");
    txtNum.value = "";
    txtNum.focus();
    btnGuess.classList.remove("d-none");
    btnStart.innerText = "YENİDEN BAŞLAT";
    txtResult.innerText = "";
};

const resetGame = () => {
    btnGuess.classList.add("d-none");
    txtNum.setAttribute("disabled", true);
    btnStart.innerText = "OYUNU BAŞLAT";
};

const guessNumber = () => {
    const userNumber = +txtNum.value;

    if (!userNumber || isNaN(userNumber) || userNumber < minRandomNumber || userNumber > maxRandomNumber) {
        txtResult.innerText = `Lütfen ${minRandomNumber} ile ${maxRandomNumber} arasında bir sayı giriniz!`;
        return;
    }

    if (userNumber === randomNumber) {
        txtResult.innerText = `Tebrikler! Doğru sayıyı buldunuz!`;
        txtResult.classList.replace("text-danger", "text-success");
        resetGame();
    } else if (userNumber > randomNumber) {
        txtResult.innerText = `Daha küçük bir sayı giriniz!`;
    } else {
        txtResult.innerText = `Daha büyük bir sayı giriniz!`;
    }

    txtNum.value = "";
    txtNum.focus();
};


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;