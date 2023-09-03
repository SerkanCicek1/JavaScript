import { students } from "../data/students.js";

// GET ELEMENTS
const btnShow = document.getElementById('btnShow');

// buton'a click eventi ekle
btnShow.addEventListener('click', () => {
    setColorForLowGrades();
});

// dusuk notlar icin arka plan rengini kirmizi yap
const setColorForLowGrades = () => {
    //  butun tablo satirlarini sec
    const tableRows = document.querySelectorAll("#studentsTable tbody tr");

    // her dongude satirin son sutunundaki notu al
    tableRows.forEach((row) => {
        const grade = row.querySelector("td:last-child").innerText;
        //  not 40'dan kucukse satirin arka plan rengini kirmizi yap
        if (grade < 40) {
            row.classList.add("table-danger");
        }
    });
};

// tabloyu olusturacak fonksiyonu aninda cagir
(() => {
    let html = "";

    students.forEach((student) => {
        html += `<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
            </tr>`;
    })

    const tbodyElement = document.querySelector("#studentsTable tbody");
    tbodyElement.innerHTML = html;
})();