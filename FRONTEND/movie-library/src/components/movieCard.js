import { searchMovieWithId } from "../services/api";

export function renderMovies(movies) {
  const moviesList = document.getElementById("moviesList");

  moviesList.innerHTML = ""; // Limpa a lista atual

  movies.forEach((movie) => {
    moviesList.innerHTML += createMovieCard(movie);
  });
}

export async function abrirModal(movieName) {
  //const movieJson = JSON.parse(movie);
  //console.log(movieJson);

  const movie = await searchMovieWithId().then((data) => {
    return data;
  });

  console.log(movie);
}

//deixando a funcao de abrir o modal com
window.abrirModal = abrirModal;
//const palavra = "opa";

export function createMovieCard(movie) {
  console.log();
  const jsonMovie = JSON.stringify(movie);

  return ` <div id="card" onclick="abrirModal('${movie.title}')" class="card col-4 align-items-center">
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
