const API_KEY = "b8ea5f28"; // Você pode usar: 'trilogy'
const BASE_URL = "https://www.omdbapi.com";
const FULL_URL = `${BASE_URL}&${API_KEY}&t=`;

import axios from "axios";

export async function searchMovies(query) {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        s: query,
        type: "movie",
        apikey: API_KEY,
      },
    });

    if (response.data.Response === "False") {
      throw new Error(response.data.Error || "Nenhum filme encontrado");
    }

    console.log(response.data);

    return response.data.Search.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster:
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/300x450?text=Sem+Poster",
      type: movie.Type,
    }));
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    throw error;
  }
}

export async function searchMovieWithId(name) {
  const response = await axios.get(`${BASE_URL}/`, {
    params: {
      s: name,
      type: "movie",
      apikey: API_KEY,
    },
  });
}
