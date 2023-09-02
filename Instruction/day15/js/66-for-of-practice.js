import { countries as ulkeler } from "../data/countries.js";

const animals = ["object", "string", "string", "string", "string"];

console.log(ulkeler);

const loadData = () => {
    let options = "";

    for (let ulke of ulkeler) {
        console.log(ulke);
        // console.log(ulke.cca3);
        // console.log(ulke.name.common);
        options += `<option value="${ulke.cca3}">${ulke.name.common}</option>`;
    }
    const selectEl = document.querySelector("#countriesList");
    selectEl.innerHTML = options;
};

loadData();

for (let animal of animals) {
    console.log(animal);
}