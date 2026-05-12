const container = document.getElementById("listaPokemons");

const pagina = window.location.pathname;

let tipo = "";

if (pagina.includes("fire")) tipo = "fire";
if (pagina.includes("water")) tipo = "water";
if (pagina.includes("grass")) tipo = "grass";
if (pagina.includes("electric")) tipo = "electric";
if (pagina.includes("bug")) tipo = "bug";
if (pagina.includes("ghost")) tipo = "ghost";
if (pagina.includes("dark")) tipo = "dark";
if (pagina.includes("psychic")) tipo = "psychic";
if (pagina.includes("rock")) tipo = "rock";
if (pagina.includes("ice")) tipo = "ice";
if (pagina.includes("ground")) tipo = "ground";
if (pagina.includes("steel")) tipo = "steel";
if (pagina.includes("fairy")) tipo = "fairy";
if (pagina.includes("normal")) tipo = "normal";
if (pagina.includes("fighting")) tipo = "fighting";

async function carregarCategoria() {

    const resposta = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);

    const dados = await resposta.json();

    const pokemons = dados.pokemon.slice(0, 30);

    container.innerHTML = "";

    for (const item of pokemons) {

        const respostaPokemon = await fetch(item.pokemon.url);

        const pokemon = await respostaPokemon.json();

        container.innerHTML += `

            <a href="pokemon.html?id=${pokemon.id}" class="card ${tipo}">

                <img 
                src="${pokemon.sprites.other["official-artwork"].front_default}"
                alt="${pokemon.name}"
                >

                <h2>${pokemon.name}</h2>

                <p>#${pokemon.id}</p>

            </a>

        `;
    }
}

carregarCategoria();