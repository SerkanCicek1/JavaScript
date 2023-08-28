// DOM ELEMENTS
const carList = document.getElementById("carList");
const carValue = document.getElementById("carValue");

carValue.classList.add("text-capitalize");

const car = {
    brand: "Audi",
    model: "A4",
    color: "red",
    year: 2019,
    doors: 4,
    seats: 5,
    engine: "2.0 TDI",
    fuel: "diesel",
    transmission: "Automatic",
    price: 20000,
};

carList.addEventListener("change", (e) => {
    const carKey = e.target.value;
    carValue.innerHTML = car[carKey];
    // objelerde anahtar ismiyle değerlere ulaşmak için köşeli parantez kullanılır
});

const fillCarList = () => {
    const carKeys = Object.keys(car);
    console.log(carKeys);

    for (let i = 0; i < carKeys.length; i++) {
        const carKey = carKeys[i];

        // const option = document.createElement("option");
        // option.value = carKey;
        // option.innerHTML = carKey;
        // option.classList.add("text-capitalize");
        // carList.appendChild(option);

        carList.innerHTML += `
        <option 
            class="text-capitalize" 
            value=${carKey}
            >
                ${carKey}
        </option>
        `
    }
};

fillCarList();


// const kullaniciInputu = "brand";
// car[kullaniciInputu]; // car["brand"] => car.brand => "Audi"