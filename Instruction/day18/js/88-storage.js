// sayfaya ilk giriste 1, sonraki girislerde 1 artarak devam eden sayac

const handleCounter = () => {
    let count = localStorage.getItem("pageCounter");

    //  count var mi? varsa count'u al yoksa 0 al
    count ??= 0; // count = count ?? 0;
    // count degerini bir artir
    count++;
    // count'u localstorage'a kaydet
    localStorage.setItem("pageCounter", count);
    // count'u ekrana yazdir
    const counterEl = document.getElementById("count");
    counterEl.innerHTML = `Uygulamamıza ${count} kez giriş yapıldı.`;
};

const handleMessage = () => {
    // localStorage'da name diye bir key var mi? varsa name degerini al, yoksa guest degerini al
    const name = localStorage.getItem("name") ?? "Guest";
    // name'i ekrana yazdir
    const messageEl = document.getElementById("welcomeMessage");
    messageEl.innerHTML = `Hoşgeldin ${name}`;
};

// save butonuna tiklandiginda name degerini localstorage'a kaydet
const saveButton = document.getElementById("btnSave");

saveButton.addEventListener("click", () => {
    const name = document.getElementById("txtName").value;
    localStorage.setItem("name", name);
});

handleCounter();
handleMessage();