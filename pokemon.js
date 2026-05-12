const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const container = document.getElementById("pokemonDetalhes");

async function carregarPokemon() {

    try {

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const pokemon = await resposta.json();

        const tipos = pokemon.types
            .map(tipo => tipo.type.name);

        const habilidades = pokemon.abilities
            .map(habilidade => habilidade.ability.name)
            .join(", ");

        /* CORES DOS TIPOS */

        const cores = {

            fire: "#ff6b35",
            water: "#3b82f6",
            grass: "#4caf50",
            electric: "#facc15",
            psychic: "#ec4899",
            ghost: "#7e57c2",
            dark: "#424242",
            ice: "#7dd3fc",
            dragon: "#673ab7",
            fairy: "#f9a8d4",
            fighting: "#b91c1c",
            poison: "#9333ea",
            rock: "#78716c",
            ground: "#a16207",
            bug: "#84cc16",
            flying: "#60a5fa",
            normal: "#9e9e9e",
            steel: "#94a3b8"

        };

        const corPrincipal = cores[tipos[0]] || "#444";

        container.innerHTML = `

            <div class="detalhe-card" style="--cor-tipo: ${corPrincipal};">

                <h1>${pokemon.name}</h1>

                <img 
                src="${pokemon.sprites.other["official-artwork"].front_default}" 
                alt="${pokemon.name}"
                >

                <div class="info">

                    <p><strong>ID:</strong> ${pokemon.id}</p>

                    <p><strong>Experiência Base:</strong> ${pokemon.base_experience}</p>

                    <p>
                        <strong>Tipo:</strong>

                        <span class="tipo">
                            ${tipos.join(", ")}
                        </span>
                    </p>

                    <p><strong>Altura:</strong> ${pokemon.height}</p>

                    <p><strong>Peso:</strong> ${pokemon.weight}</p>

                    <p><strong>Habilidades:</strong> ${habilidades}</p>

                </div>

                <a href="index.html" class="btn-voltar">
                    Voltar
                </a>

            </div>

        `;

    } catch(error) {

        container.innerHTML = `

            <h2>Pokémon não encontrado</h2>

        `;

        console.error(error);

    }
}

carregarPokemon();