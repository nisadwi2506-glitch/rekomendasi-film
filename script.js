// =====================================
// MENGAMBIL ELEMEN HTML
// =====================================

const search = document.getElementById("search");
const genre = document.getElementById("genre");
const cards = document.querySelectorAll(".film-card");
const notFound = document.getElementById("notFound");
const suggestions = document.getElementById("searchSuggestions");


// =====================================
// MEMINDAHKAN RATING DAN TAHUN KE POSTER
// =====================================

cards.forEach(card => {
    const poster = card.querySelector(".poster");
    const rating = card.querySelector(".film-info span");
    const year = card.dataset.year;

    if (rating && poster) {
        const ratingBadge = document.createElement("div");

        ratingBadge.className = "poster-rating";
        ratingBadge.textContent = rating.textContent;

        poster.appendChild(ratingBadge);
    }

    if (year && poster) {
        const yearBadge = document.createElement("div");

        yearBadge.className = "poster-year";
        yearBadge.textContent = year;

        poster.appendChild(yearBadge);
    }
});


// =====================================
// DAFTAR SINOPSIS FILM
// =====================================

const filmSynopses = {

    "A Korean Odyssey":
        "Son Oh Gong, sosok Raja Monyet yang memiliki kekuatan luar biasa, bertemu kembali dengan Jin Seon Mi yang mampu melihat makhluk gaib. Keduanya terlibat dalam berbagai kejadian supernatural.",

    "Agak Laen":
        "Empat sahabat mengelola rumah hantu di sebuah pasar malam. Sebuah kejadian tak terduga membuat mereka terlibat dalam masalah yang semakin rumit.",

    "One Piece":
        "Monkey D. Luffy bersama kru Topi Jerami berlayar mengarungi lautan untuk mencari harta karun legendaris bernama One Piece.",

    "The Conjuring":
        "Pasangan penyelidik paranormal Ed dan Lorraine Warren membantu sebuah keluarga yang mengalami kejadian misterius di rumah baru mereka.",

    "Moana":
        "Moana melakukan perjalanan melintasi lautan untuk menyelamatkan pulau dan masyarakatnya.",

    "My Beautiful Bride":
        "Seorang pria berusaha mencari tunangannya yang tiba-tiba menghilang. Pencarian tersebut membawanya pada berbagai rahasia.",

    "Insidious":
        "Sebuah keluarga mengalami kejadian aneh setelah anak mereka tiba-tiba tidak sadarkan diri. Mereka kemudian menemukan hubungan dengan dunia lain.",

    "Sumala":
        "Kehidupan sebuah keluarga berubah setelah peristiwa misterius yang berkaitan dengan kelahiran anak kembar.",

    "Ratatouille":
        "Remy, seekor tikus yang memiliki bakat memasak, bermimpi menjadi koki hebat dan berusaha mewujudkan impiannya di Paris.",

    "Teach You a Lesson":
        "Sekelompok orang menghadapi berbagai masalah perundungan dan ketidakadilan di lingkungan pendidikan.",

    "Zootopia":
        "Judy Hopps, seekor kelinci yang menjadi polisi, bekerja sama dengan Nick Wilde untuk mengungkap kasus misterius di kota Zootopia.",

    "Kang Mak x Nenek Gayung":
        "Kisah komedi horor yang memadukan cerita Kang Mak dengan sosok Nenek Gayung.",

    "Ice Cream Man":
        "Kehadiran seorang penjual es krim misterius membawa kejadian aneh ke sebuah lingkungan.",

    "Encanto":
        "Mirabel tinggal bersama keluarga Madrigal yang memiliki kemampuan ajaib. Ketika keajaiban keluarga mereka terancam, Mirabel berusaha mencari penyebabnya.",

    "The King : Eternal Monarch":
        "Kaisar Lee Gon menemukan jalan menuju dunia paralel dan bertemu seorang detektif bernama Jung Tae Eul.",

    "Sekawan Limo":
        "Perjalanan mendaki gunung yang dilakukan lima orang sahabat berubah menjadi pengalaman penuh kejadian misterius.",

    "Bolt":
        "Bolt, seekor anjing yang mengira dirinya memiliki kekuatan super, melakukan perjalanan untuk mencari pemiliknya.",

    "The Batman":
        "Bruce Wayne menjalani kehidupannya sebagai Batman dan menyelidiki serangkaian kejahatan misterius di Kota Gotham.",

    "Final Destination":
        "Sekelompok orang berhasil menghindari kecelakaan besar setelah salah satu dari mereka mendapat firasat, tetapi kejadian misterius terus menghantui mereka.",

    "The Good Dinosaur":
        "Arlo, seekor dinosaurus muda, berteman dengan seorang anak manusia dan melakukan perjalanan untuk menemukan jalan pulang.",

    "Inside Out":
        "Lima emosi di dalam pikiran Riley harus bekerja sama ketika Riley menghadapi perubahan besar dalam hidupnya.",

    "The Medium":
        "Sebuah tim dokumenter mengikuti kehidupan seorang perempuan yang dipercaya memiliki hubungan dengan roh penjaga keluarganya.",

    "Petaka Gunung Gede":
        "Perjalanan pendakian sekelompok sahabat di Gunung Gede berubah menjadi pengalaman menegangkan setelah mengalami kejadian misterius.",

    "Toy Story":
        "Woody dan Buzz Lightyear belajar bekerja sama ketika menghadapi berbagai petualangan bersama mainan lainnya.",

    "Up":
        "Carl menerbangkan rumahnya menggunakan ribuan balon untuk mewujudkan impian lama. Ia kemudian ditemani seorang anak pramuka bernama Russell.",

    "Midsommar":
        "Sekelompok mahasiswa menghadiri festival musim panas di sebuah desa di Swedia. Namun, tradisi masyarakat setempat menyimpan banyak kejanggalan.",

    "Finding Nemo":
        "Marlin melakukan perjalanan melintasi lautan untuk menemukan anaknya, Nemo, yang terpisah darinya.",

    "Spider-Man : Into the Spider-Verse":
        "Miles Morales mendapatkan kekuatan laba-laba dan bertemu berbagai Spider-Man dari dimensi berbeda.",

    "Mencuri Raden Saleh":
        "Sekelompok anak muda dengan keahlian berbeda merencanakan pencurian lukisan bersejarah karya Raden Saleh.",

    "Filpped":
        "Juli dan Bryce adalah dua tetangga yang memiliki pandangan berbeda. Seiring waktu, mereka mulai memahami perasaan masing-masing.",

    "Rio":
        "Blu, seekor burung macaw yang dibesarkan di rumah, melakukan perjalanan ke Rio de Janeiro dan bertemu Jewel.",

    "Evil Dead Rise":
        "Dua saudara perempuan harus menghadapi kejadian supernatural yang mengubah pertemuan keluarga mereka.",

    "Sri Asih":
        "Alana mengetahui bahwa dirinya memiliki kekuatan luar biasa dan merupakan penerus sosok pahlawan Sri Asih.",

    "The Human Centipede":
        "Dua wisatawan mencari bantuan di sebuah rumah terpencil, tetapi justru terjebak dalam eksperimen pemilik rumah.",

    "Despicable Me":
        "Gru, seorang penjahat yang merencanakan aksi besar, mengadopsi tiga anak perempuan yang perlahan mengubah kehidupannya.",

    "Cek Toko Sebelah":
        "Koh Afuk ingin mewariskan toko keluarganya kepada Erwin. Keputusan tersebut memicu konflik dengan kakaknya, Yohan.",

    "One Missed Call":
        "Sejumlah orang menerima panggilan telepon misterius yang berasal dari masa depan dan berkaitan dengan kejadian mengerikan.",

    "Cars":
        "Lightning McQueen, mobil balap yang ambisius, tersesat di kota kecil Radiator Springs dan belajar tentang persahabatan.",

    "Elemental":
        "Ember dari elemen api bertemu Wade dari elemen air. Keduanya menjalin hubungan meskipun berasal dari lingkungan berbeda.",

    "Tusk":
        "Seorang podcaster pergi ke Kanada untuk mewawancarai pria misterius, tetapi pertemuan itu berubah menjadi pengalaman yang tidak biasa.",

    "Sore : Istri dari Masa Depan":
        "Jonathan bertemu perempuan bernama Sore yang mengaku sebagai istrinya dari masa depan. Kehadirannya mengubah cara Jonathan memandang hidup.",

    "Home Alone":
        "Kevin tidak sengaja tertinggal sendirian di rumah saat keluarganya pergi berlibur dan harus menghadapi dua pencuri.",

    "Monsters, Int":
        "Sulley dan Mike bekerja di perusahaan yang mengumpulkan energi dari teriakan anak-anak. Kehidupan mereka berubah setelah seorang anak manusia masuk ke dunia monster.",

    "Waktu Maghrib":
        "Sekelompok anak mengalami kejadian misterius setelah melanggar larangan bermain saat waktu magrib.",

    "Knives Out":
        "Seorang detektif menyelidiki kematian seorang penulis kaya. Seluruh anggota keluarganya menyimpan rahasia.",

    "Ada Apa dengan Cinta":
        "Cinta, seorang siswi populer, bertemu Rangga yang memiliki kepribadian berbeda. Hubungan mereka berkembang melalui puisi dan konflik persahabatan.",

    "Enola Holmes":
        "Enola, adik perempuan Sherlock Holmes, memulai petualangannya sendiri untuk mencari ibunya yang menghilang.",

    "Agak Laen : Menyala Pantiku!":
        "Empat sahabat mendapat misi sebagai detektif dan harus menyamar di sebuah panti jompo untuk mencari buronan.",

    "Top Gun : Maverick":
        "Pete Maverick Mitchell kembali menjadi instruktur penerbang untuk melatih pilot muda dalam menjalankan misi menantang.",

    "A Little Thing Called Love":
        "Nam, seorang siswi, diam-diam menyukai kakak kelasnya dan berusaha menjadi lebih percaya diri.",

    "Searching":
        "Seorang ayah mencari putrinya yang menghilang dengan menelusuri berbagai jejak digital dan aktivitas di komputer putrinya.",

    "10 Things I Hate About You":
        "Cameron menyukai Bianca, tetapi Bianca hanya boleh berkencan jika kakaknya, Kat, juga memiliki pasangan."
};


// =====================================
// MEMBUAT POP-UP DETAIL FILM
// =====================================

const filmModal = document.createElement("div");

filmModal.className = "film-modal";

filmModal.innerHTML = `
    <div class="film-modal-content">

        <img
            class="modal-poster"
            src=""
            alt="Poster film">

        <div class="film-modal-info">

            <h2 class="modal-title"></h2>

            <p>
                <strong>Tahun:</strong>
                <span class="modal-year"></span>
            </p>

            <p>
                <strong>Genre:</strong>
                <span class="modal-genre"></span>
            </p>

            <p>
                <strong>Rating:</strong>
                <span class="modal-rating"></span>
            </p>

            <p class="modal-synopsis">
                <strong>Sinopsis:</strong>
                <span class="modal-synopsis-text"></span>
            </p>

            <a
                class="modal-watch-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer">
                ▶ Cari Platform Streaming
            </a>

        </div>
    </div>
`;

document.body.appendChild(filmModal);


// =====================================
// FUNGSI MENAMPILKAN DETAIL FILM
// =====================================

function showFilmDetail(card) {

    const title = card.dataset.title;
    const year = card.dataset.year || "-";
    const genres = card.dataset.genre || "-";

    const posterImage = card.querySelector(".poster img");
    const rating = card.querySelector(".film-info span");

    const synopsis = filmSynopses[title] ||
        "Sinopsis untuk film ini belum tersedia.";

    // POSTER
    const modalPoster = filmModal.querySelector(".modal-poster");

    modalPoster.src = posterImage ? posterImage.src : "";
    modalPoster.alt = "Poster " + title;

    // JUDUL DAN TAHUN
    filmModal.querySelector(".modal-title").textContent = title;

    filmModal.querySelector(".modal-year").textContent = year;

    // GENRE
    const formattedGenres = genres
        .split(",")
        .map(item => {
            const name = item.trim();

            return name.charAt(0).toUpperCase() + name.slice(1);
        })
        .join(" • ");

    filmModal.querySelector(".modal-genre").textContent =
        formattedGenres;

    // RATING
    filmModal.querySelector(".modal-rating").textContent =
        rating ? rating.textContent : "-";

    // SINOPSIS
    filmModal.querySelector(".modal-synopsis-text").textContent =
        synopsis;

    // LINK PLATFORM STREAMING
    const watchLink = filmModal.querySelector(".modal-watch-link");

    watchLink.href =
        `https://www.justwatch.com/id/search?q=${encodeURIComponent(title + " " + year)}`;

    watchLink.textContent = "▶ Cari Platform Streaming";

    watchLink.target = "_blank";
    watchLink.rel = "noopener noreferrer";

    // MENAMPILKAN POP-UP
    filmModal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


// =====================================
// KLIK POSTER ATAU JUDUL FILM
// =====================================

cards.forEach(card => {

    const poster = card.querySelector(".poster");
    const title = card.querySelector(".film-info h3");

    if (poster) {
        poster.addEventListener("click", () => {
            showFilmDetail(card);
        });
    }

    if (title) {
        title.addEventListener("click", () => {
            showFilmDetail(card);
        });
    }

});


// =====================================
// MENUTUP POP-UP
// =====================================

function closeFilmModal() {
    filmModal.style.display = "none";
    document.body.style.overflow = "";
}

// Klik area luar pop-up
filmModal.addEventListener("click", event => {

    if (event.target === filmModal) {
        closeFilmModal();
    }

});

// Tombol Escape
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeFilmModal();
    }

});


// =====================================
// FUNGSI FILTER FILM
// =====================================

function filterFilm() {

    const searchValue = search.value.toLowerCase().trim();
    const genreValue = genre.value.toLowerCase();

    let found = 0;

    cards.forEach(card => {

        const title = card.dataset.title.toLowerCase();

        const cardGenres = card.dataset.genre
            .split(",")
            .map(item => item.trim().toLowerCase());

        const matchSearch = title.includes(searchValue);

        const matchGenre =
            genreValue === "all" ||
            cardGenres.includes(genreValue);

        if (matchSearch && matchGenre) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });

    notFound.style.display = found === 0 ? "block" : "none";
}


// =====================================
// REKOMENDASI PENCARIAN OTOMATIS
// =====================================

function showSuggestions() {

    const value = search.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    if (value === "") {

        suggestions.style.display = "none";
        return;

    }

    const results = [...cards].filter(card => {

        const title = card.dataset.title.toLowerCase();

        const genres = card.dataset.genre
            .split(",")
            .map(item => item.trim().toLowerCase());

        const matchTitle = title.includes(value);

        const matchGenre =
            genre.value === "all" ||
            genres.includes(genre.value.toLowerCase());

        return matchTitle && matchGenre;

    }).slice(0, 6);

    if (results.length === 0) {

        suggestions.style.display = "none";
        return;

    }

    results.forEach(card => {

        const button = document.createElement("button");

        button.type = "button";
        button.textContent = card.dataset.title;

        button.addEventListener("click", () => {

            search.value = card.dataset.title;

            suggestions.style.display = "none";

            filterFilm();

            showFilmDetail(card);

        });

        suggestions.appendChild(button);

    });

    suggestions.style.display = "block";
}


// =====================================
// EVENT PENCARIAN
// =====================================

search.addEventListener("input", () => {

    filterFilm();

    showSuggestions();

});


// =====================================
// EVENT FILTER GENRE
// =====================================

genre.addEventListener("change", () => {

    filterFilm();

    showSuggestions();

});


// =====================================
// MENUTUP SARAN PENCARIAN
// =====================================

document.addEventListener("click", event => {

    if (!event.target.closest(".search-wrapper")) {

        suggestions.style.display = "none";

    }

});


// =====================================
// MENAMPILKAN SARAN SAAT INPUT DIKLIK
// =====================================

search.addEventListener("focus", showSuggestions);


// =====================================
// KONDISI AWAL WEBSITE
// =====================================

filterFilm();
