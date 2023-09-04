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
        const grade = row.querySelector("td:nth-child(3)").innerText;
        //  not 40'dan kucukse satirin arka plan rengini kirmizi yap
        if (grade < 40) {
            row.classList.toggle("table-danger");
        }
    });
};

// tabloyu olusturacak fonksiyonu aninda cagir
(() => {
    let html = "";

    students.forEach((student) => {
        html += `<tr class="data-row">
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td><button class="btn btn-danger btn-del">🗑️</button></td>
            </tr>`;
    })

    const tbodyElement = document.querySelector("#studentsTable tbody");
    tbodyElement.innerHTML = html;
})();


// butun tabloya click eventi ekle
document.getElementById("studentsTable").addEventListener("click", (e) => {
    // tiklanan elementin class listesinde btn-del varsa onun uzerinde islem yap
    if (e.target.classList.contains("btn-del")) {
        // tiklanan butonun satirindaki ismi al
        const name = e.target.closest("tr").children[1].innerText;

        // silme islemi icin onay iste
        const result = confirm(`${name} isimli öğrenciyi silmek istediğinize emin misiniz?`);

        // kullanici onay verdiyse
        if (result) {
            // silme islemini gerceklestir
            e.target.closest("tr").remove();
            // tablodaki satirlari kaldirilan satir cikarilmis halde tekrar sec
            const tableRows = document.querySelectorAll("#studentsTable .data-row");
            // tablodaki satirlarin index'lerini guncelle
            tableRows.forEach((tr, index) => {
                tr.children[0].innerText = index + 1;
            })
        }
    } else if (e.target.closest("tr").classList.contains("data-row")) {
        e.target.closest("tr").classList.toggle("table-info")
    }
})