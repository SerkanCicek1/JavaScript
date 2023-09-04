// DOM ELEMENTS
const formLoginEl = document.getElementById('formLogin');
const inputEmailEl = document.getElementById('email');
const inputPasswordEl = document.getElementById('password');

formLoginEl.addEventListener("submit", (e) => {
    e.preventDefault(); // formun default davranışını engelledik

    try {
        const email = inputEmailEl.value;
        const password = inputPasswordEl.value;

        if (!email || !isEmail(email)) throw new Error("Please enter a valid email address");
        if (!password) throw new Error("Please enter a valid password");
        console.log("hata yok");
    } catch (err) {
        console.log(err);
        alert(err.message);
    } finally {
        console.log("En son çalışan blok");
    }
});

// email adresinin kurallara uygun olup olmadığını kontrol eden regex fonksiyonu
const isEmail = (email) => {
    const regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/;
    return regex.test(email);
}  // email regex kontrolü yapılacak