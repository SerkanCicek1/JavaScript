let maas = 30000;

// if (maas > 10000) {
//     console.log("hayatta kalir")
// } else {
//     console.log("hayatta kalamaz")
// }

console.log(maas > 10000 ? "hayatta kalir" : "hayatta kalamaz");

console.log(maas > 30000
    ? "iyi"
    : maas > 20000
        ? "fena degil"
        : maas > 10000
            ? "idate eder"
            : "az");

maas > 30000
    ? console.log("iyi")
    : console.log("kotu");

const maasBildirisi = maas > 30000 ? "iyi" : "kotu";

console.log(maasBildirisi);

const bodyEl = document.querySelector("body");
bodyEl.innerText = maasBildirisi