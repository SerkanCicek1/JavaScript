import { searchShows } from "../api/tv-maze-api.js";

// timeout id'yi tutacagimiz degisken
let timeoutSearch = null;

// DOM'a eriselim
const tvShowList = document.getElementById('tvShowList');
const searchInput = document.getElementById('search');

// kullanici search input'una birseyler yazmaya basladiginda, searchShows fonksiyonunu cagiracagiz
searchInput.addEventListener("input", (e) => {
    const query = e.target.value;

    // eger halihazirda bir timeout varsa, onu iptal edelim/temizleyelim
    if (timeoutSearch) {
        clearTimeout(timeoutSearch);
    };

    // yeni bir timeout olusturalim
    timeoutSearch = setTimeout(() => {
        searchShows(query, (gelenData) => { createMovies(gelenData) })
    }, 500);
});

// createMovies fonksiyonu, gelen veriye gore, tv show listesini olusturacak
const createMovies = (shows) => {
    // listeyi temizleyelim
    tvShowList.innerHTML = '';

    // gelen veri uzerinde dongu olusturalim, ve her dongu icin bir movie card olusturalim
    shows.forEach((item) => {
        const movieCard = createMovieCard(item);
        tvShowList.innerHTML += movieCard;
    })
};

// createMovieCard fonksiyonu, gelen veriye gore, bir movie card olusturacak
const createMovieCard = (item) => {
    const { id, image, name, genres } = item.show;

    // eger image varsa, image'i kullanalim, yoksa default bir image kullanalim
    const imageUrl = image ? image.medium : "./img/noimage.png";

    // sayfada gosterecegimiz her bir movie card'i, bir div.col icinde olusturalim
    return `
    <div class="col">
        <div
            class="card h-100"
            style="cursor: pointer"
            data-show="${id}"
            >
                <img src="${imageUrl}" alt="${name}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${genres.join("-")}</p>
                </div>
        </div>
    </div>
    `
};