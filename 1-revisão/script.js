let button = document.getElementById("input");
let div = document.getElementById("container");

let cores = [
  "blue",
  "yellow",
  "purple",
  "green",
  "white",
  "brown",
  "gray",
  "red",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "maroon",
  "navy",
  "olive",
  "teal",
  "silver",
  "gold",
  "beige",
  "coral",
  "indigo",
  "violet",
  "turquoise",
  "lavender",
  "salmon",
  "khaki",
  "plum",
  "orchid",
];

button.addEventListener("click", () => {
  let random = Math.floor(Math.random() * cores.length);
  div.style.backgroundColor = cores[random];
});
