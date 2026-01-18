import { fetchRandomMovie } from "./api.js";
import { updateMovie } from "./dom.js";

export async function loadMovie() {
  const movie = await fetchRandomMovie();
  updateMovie(movie);
}
