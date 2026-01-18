export async function fetchRandomMovie() {
  const response = await axios.get("https://jsonfakery.com/movies/random");
  return response.data;
}
console.log("axios exists:", typeof axios);
// used axios
