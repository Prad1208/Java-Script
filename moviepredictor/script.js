const API_KEY = "8265bd1679663a7ea12ac168da84d2e8"; 
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE = "https://image.tmdb.org/t/p";

const movies = {
  Low: {
    "Relaxing Picks": [
      { title: "The Secret Life of Walter Mitty" },
      { title: "Julie & Julia" },
      { title: "Eat Pray Love" }
    ],
    "Feel-Good Movies": [
      { title: "Forrest Gump" },
      { title: "The Intern" },
      { title: "Amélie" }
    ],
    "Family Movies": [
      { title: "Paddington" },
      { title: "Up" },
      { title: "Finding Nemo" }
    ]
  },

  Medium: {
    "Mind-Bending": [
      { title: "Inception" },
      { title: "Interstellar" },
      { title: "Shutter Island" }
    ],
    "Drama": [
      { title: "The Social Network" },
      { title: "The Pursuit of Happyness" },
      { title: "Good Will Hunting" }
    ],
    "Sci-Fi": [
      { title: "Arrival" },
      { title: "Ex Machina" },
      { title: "Blade Runner 2049" }
    ]
  },

  High: {
    "Action": [
      { title: "Mad Max: Fury Road" },
      { title: "John Wick" },
      { title: "Gladiator" }
    ],
    "Thrillers": [
      { title: "The Dark Knight" },
      { title: "Heat" },
      { title: "Skyfall" }
    ],
    "Intense": [
      { title: "Whiplash" },
      { title: "Prisoners" },
      { title: "Uncut Gems" }
    ]
  }
};

async function fetchMovieData(title) {
  try {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const movie = data.results[0];
      return {
        id: movie.id,
        poster: `${IMG_BASE}/w500${movie.poster_path}`,
        bg: `${IMG_BASE}/original${movie.backdrop_path}`,
        desc: movie.overview || "No description available",
        title: movie.title
      };
    }
    return null;
  } catch (err) {
    console.error("Error fetching movie:", err);
    return null;
  }
}

async function fetchTrailer(id) {
  try {
    const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const trailer = data.results.find(v => v.type === "Trailer" && v.site === "YouTube");
      if (trailer) {
        return `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;
      }
    }
    return null;
  } catch (err) {
    console.error("Error fetching trailer:", err);
    return null;
  }
}

document.getElementById("recommend-btn").addEventListener("click", async () => {
  const stress = document.getElementById("stress-level").value;
  const user = document.getElementById("username").value || "you";
  const result = document.getElementById("results");
  result.innerHTML = "";

  const categories = movies[stress];
  let firstBackgroundSet = false;

  for (const [category, movieList] of Object.entries(categories)) {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `<h3>${category} for ${user}</h3>`;

    const movieRow = document.createElement("div");
    movieRow.className = "movie-row";

    for (let i = 0; i < movieList.length; i++) {
      const m = movieList[i];
      const movieData = await fetchMovieData(m.title);

      if (movieData) {
        if (!firstBackgroundSet) {
          document.getElementById("bg-blur").style.backgroundImage = `url(${movieData.bg})`;
          firstBackgroundSet = true;
        }

        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
          <img src="${movieData.poster}" alt="${movieData.title}" />
          <div class="overlay">
            <h4>${movieData.title}</h4>
            <button data-id="${movieData.id}">▶ Play</button>
            <p>${movieData.desc}</p>
          </div>
        `;

        // Play button
        card.querySelector("button").addEventListener("click", async () => {
          const trailerUrl = await fetchTrailer(movieData.id);
          if (trailerUrl) {
            document.getElementById("trailer-frame").src = trailerUrl;
            document.getElementById("trailer-modal").style.display = "flex";
          } else {
            alert("Trailer not available.");
          }
        });

        movieRow.appendChild(card);
      }
    }

    row.appendChild(movieRow);
    result.appendChild(row);
  }
});


document.querySelector(".close").onclick = function () {
  document.getElementById("trailer-frame").src = "";
  document.getElementById("trailer-modal").style.display = "none";
};
document.querySelectorAll('.movie-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const overview = card.getAttribute('data-overview');
    const poster = card.querySelector('img').src;

    document.getElementById('panel-title').innerText = title;
    document.getElementById('panel-overview').innerText = overview || "No description available.";
    document.getElementById('panel-poster').src = poster;

    document.getElementById('movie-panel').classList.add('active');
  });
});


document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('movie-panel').classList.remove('active');
});