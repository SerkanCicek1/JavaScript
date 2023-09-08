// ELEMENTLER
const btnProgress = document.getElementById("btnProgress");
const btnList = document.getElementById("btnList");
const progressBar = document.getElementById("progressBar");
const listEl = document.getElementById("list");


// PROGRESS BAR'IN ILERLEMESINI SAĞLAYAN FONKSIYON
const progress = () => {
    const interval = setInterval(() => {
        let val = +progressBar.parentElement.getAttribute("aria-valuenow") + 1;

        // PROGRESS BAR'IN ILERLEMESI 100 OLDUGUNDA INTERVAL'I DURDUR VE PROGRESS BAR'I SIFIRLA
        if (val > 100) val = 0;
        progressBar.parentElement.setAttribute("aria-valuenow", val);

        //  PROGRESS BAR'IN ICINDEKI YAZIYI VE ILERLEMESINI GUNCELLEMEK ICIN KULLANILIR
        progressBar.style.width = `${val}%`;
        progressBar.innerHTML = `${val}%`;

        // PROGRESS BAR'IN ILERLEMESI 100 OLDUGUNDA INTERVAL'I DURDUR
        if (val >= 100) clearInterval(interval);
    }, 50);
};

// LISTEYI YUKLEYEN FONKSIYON
const loadList = () => {
    // LISTE ELEMENTINI TEMIZLIYORUZ
    listEl.innerHTML = "";

    // 1-50 ARASINDA 50  TANE LISTE ELEMANI OLUSTURUP LISTEYE EKLIYORUZ
    for (let i = 1; i <= 50; i++) {
        const li = document.createElement("li");
        li.innerText = `Liste Elemanı ${i}`;
        listEl.appendChild(li);
    }
}


// BUTONLARA CLICK EVENTI EKLE
btnProgress.addEventListener("click", progress);
btnList.addEventListener("click", loadList);