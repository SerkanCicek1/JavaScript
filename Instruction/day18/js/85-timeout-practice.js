import { countries } from "../data/countries.js";

// GET ELEMENTS
const searchEl = document.querySelector("#search");
const listEl = document.querySelector("#searchBar ul");

// FILTER DATA
const filterData = (val) => {
    if (!val) return [];
    return countries.filter((country) => {
        // return country.name.common.toLowerCase().includes(val.toLowerCase())
        return country.name?.common?.toLowerCase().startsWith(val.toLowerCase())
    })
}


// SET SEARCH BOX
const setSearchBox = (arr) => {
    // CLEAR LIST
    listEl.innerHTML = "";

    // eger data bos ise listeyi gizle ve fonksiyondan cik
    if (arr.length === 0) {
        listEl.style.display = "none";
        // listEl.classList.add("d-none");
        return;
    }

    // eger data varsa listeyi goster ve array'deki her bir element icin "li" olustur ve bunlari listeye ekle
    arr.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item?.name?.common;
        listEl.appendChild(li);
    });

    // listeyi goster
    listEl.style.display = "block";
};


// SEARCH EVENT LISTENER
searchEl.addEventListener("input", (e) => {
    // cleartimeout metoduyla calisan bir timeout varsa onu iptal et
    if (timeoutId) clearTimeout(timeoutId);

    console.log(e.target.value)
    // 1 saniye sonra calisacak bir timeout olustur ki kullanici yazmayi birakana kadar bekle ve sonrasinda filtreleme islemi yap
    const timeoutId = setTimeout(() => {
        setSearchBox(filterData(e.target.value));
    }, 5000);
});