const pesquisa = document.getElementById("pesquisar");

pesquisa.addEventListener("input", function () {

    const valor = pesquisa.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const nomePokemon = card.innerText.toLowerCase();

        if (nomePokemon.includes(valor)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});

function abrirMenu() {
    document.getElementById("menuLateral").classList.add("ativo");
}

function fecharMenu() {
    document.getElementById("menuLateral").classList.remove("ativo");
}
const containerApi = document.getElementById("pokemon-api");

async function buscarPokemon(id) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await resposta.json();

    criarCardApi(pokemon);
}

function criarCardApi(pokemon) {
    const card = document.createElement("a");

    card.href = "#";
    card.classList.add("card");

    const nome = pokemon.name;
    const imagem = pokemon.sprites.other["official-artwork"].front_default;

    card.innerHTML = `
  <a href="pokemon.html?id=${pokemon.name}" class="card-link">
    <div class="container-pokemons">
      <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
    </div>
  </a>
`;
    containerApi.appendChild(card);
}

for (let i = 11; i <= 151; i++) {
    buscarPokemon(i);
}
