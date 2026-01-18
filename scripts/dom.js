export function updateMovie(movie) {
  const img = document.getElementById("movieImage");
  const desc = document.getElementById("movieDescription");

  img.src = movie.poster_path;
  desc.textContent = movie.overview;
}
