export function renderMovies(movies) {
  const moviesList = document.getElementById("moviesList");

  moviesList.innerHTML = ""; // Limpa a lista atual

  movies.forEach((movie) => {
    moviesList.innerHTML += createMovieCard(movie);
  });
}

export function createMovieCard(movie) {
  return ` <div class="card col-4 align-items-center">
          <div class="card-body">
            <img
              src="${movie.poster}"
              alt=""
            />
            <h5 class="card-title">${movie.title}</h5>

            <p class="card-text">Ano: ${movie.year}</p>
          </div>
        </div>`;
}
