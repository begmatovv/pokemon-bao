const api = `https://pokeapi.co/api/v2/pokemon/`;
const btn = document.getElementById("btn");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const deffense = document.getElementById("deffense");
const speed = document.getElementById("speed");
const type = document.getElementById("type");
const name = document.getElementById("name");
let randomNum = Math.trunc(Math.random() * 1000) + 1;
const img = document.querySelector("img");

function updateUI(pokeInfo) {
  hp.textContent = pokeInfo.stats[0].base_stat;
  attack.textContent = pokeInfo.stats[1].base_stat;
  deffense.textContent = pokeInfo.stats[2].base_stat;
  speed.textContent = pokeInfo.stats[5].base_stat;
  name.textContent = pokeInfo.name;
  type.textContent = pokeInfo.types[0].type.name;

  img.setAttribute(
    "src",
    pokeInfo.sprites.other.dream_world.front_default ??
      pokeInfo.sprites.front_default
  );
}

function getData(api) {
  fetch(api)
    .then((data) => data.json())
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));
}
getData(api + randomNum);
btn.addEventListener("click", () => {
  randomNum = Math.trunc(Math.random() * 1000) + 1;
  const api = "https://pokeapi.co/api/v2/pokemon/" + randomNum;
  getData(api);
});
