// GET DOM ELEMENTS
const identityEl = document.getElementById('identity');
const btnUpdateEl = document.getElementById('btnUpdate');
const passwordEl = document.getElementById('password');
const btnTogglePasswordEl = document.getElementById('btnTogglePassword');


identityEl.addEventListener("input", (e) => {
    const ID = e.target.value;
    if (ID && ID.length === 11 && ID > 0) {
        // btnUpdateEl.disabled = false;
        btnUpdateEl.removeAttribute('disabled');
    } else {
        // btnUpdateEl.disabled = true;
        btnUpdateEl.setAttribute('disabled', 'disabled');
    }
});

btnTogglePasswordEl.addEventListener("click", (e) => {

    // type'in password olup olmadığını kontrol et
    if (passwordEl.type === "password") {
        passwordEl.type = "number";
        btnTogglePasswordEl.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    } else {
        passwordEl.type = 'password';
        btnTogglePasswordEl.innerHTML = `<i class="fa-solid fa-eye"></i>`
    }
});