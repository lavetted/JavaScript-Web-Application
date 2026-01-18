import { loadMovie } from "./events.js";

document.getElementById("loadMovie").addEventListener("click", loadMovie);

window.addEventListener("DOMContentLoaded", loadMovie);

console.log("main.js loaded");
