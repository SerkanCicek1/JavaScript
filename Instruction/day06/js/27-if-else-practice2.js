/* 

1 - sayfada bir buton olacak
2 - bu butona tiklandiginda bir fonksiyon calisacak
3 - calisan fonksiyon body elementimizin icerisinde dark class'i olup olmadigini kontrol edecek, eger varsa kaldiracak yoksa ekleyecek

*/

function setMode() {
    const body = document.querySelector("body");
    const btnToggle = document.querySelector(".toggle-btn");

    const isDark = body.classList.contains("dark");

    if (isDark) {
        body.classList.remove("dark"); 
        btnToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        body.classList.add("dark");
        btnToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
}