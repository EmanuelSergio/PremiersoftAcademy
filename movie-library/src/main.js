import { searchMovies } from "./services/api.js";
import { renderMovies } from "./components/movieCard.js";
import { buscarTodos } from "./services/api.js";

// TODO: Implementar a lógica de busca
document.getElementById("searchButton").addEventListener("click", async () => {
  const input = document.getElementById("searchInput").value;
  //const movies = await searchMovies(input);
  searchMovies(input).then((movie) => {
    renderMovies(movie);
  });

  //console.log(movies);
});

// Carregar alguns filmes iniciais
searchMovies("marvel").then((movies) => {
  renderMovies(movies);
});
