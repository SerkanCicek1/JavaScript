// DOM ELEMENTS
const grade1El = document.querySelector("#txtScore1");
const grade2El = document.querySelector("#txtScore2");
const grade3El = document.querySelector("#txtScore3");
const btnAverage = document.querySelector("#btnAverage");
const txtResult = document.querySelector("#txtResult");

btnAverage.addEventListener("click", () => {
    const grade1 = +grade1El.value;
    const grade2 = +grade2El.value;
    const grade3 = +grade3El.value;

    if (!isGradeValid(grade1) || !isGradeValid(grade2) || !isGradeValid(grade3)) {
        alert("Lütfen 0-100 arasında bir not giriniz.");
        return;
    }

    const average = (grade1 + grade2 + grade3) / 3;
    const letter = convertGradeToLetter(average);
    txtResult.innerText = `Ortalamanız: ${Math.round(average)} ve harf notunuz: ${letter}`;
});


const isGradeValid = (grade) => {
    if (grade === 0) return true;
    return grade && !isNaN(grade) && grade > 0 && grade <= 100;
};

const convertGradeToLetter = (grade) => {
    grade = Math.round(grade);
    if (grade >= 90) return "AA";
    if (grade >= 85) return "BA";
    if (grade >= 80) return "BB";
    if (grade >= 75) return "CB";
    if (grade >= 70) return "CC";
    if (grade >= 65) return "DC";
    if (grade >= 60) return "DD";
    if (grade >= 55) return "FD";
    if (grade >= 50) return "FF";
    return "FF";
};