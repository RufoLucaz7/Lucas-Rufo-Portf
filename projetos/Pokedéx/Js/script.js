//variaveis globais

const pokemonName = document.querySelector(".pokemom_name")

const pokemonNumber = document.querySelector(".pokemon_number")

const pokemonImage = document.querySelector(".pokemon_image")

const form = document.querySelector(".form") 

const input = document.querySelector(".input_search")

const btnPrev = document.querySelector(".btn-prev")

const btnNext = document.querySelector(".btn-next")

let searchPokemon = 0;



 //conectando: com a API

 const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


    console.log(APIResponse)

    if (APIResponse.status === 200) {

        const data = await APIResponse.json();

       return data;

    } 

 };

 //renderizar os dados da API
 
const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = "Carregando...";
    pokemonNumber.innerHTML = "";

    const data = await fetchPokemon(pokemon)

    if (data) {

        pokemonName.innerHTML = data.name;
        pokemonNumber.textContent = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value=""
        searchPokemon = data.id
        
    } else {
        pokemonName.innerHTML = "Não encontrado"
        input.value = "";
        pokemonImage.src = "../image/148206698b1952a3f7d.webp"
    }

    console.log(data)
}


//capturar pokemon pelo input

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase())
});


//eventos dos botões prev next 

btnNext.addEventListener("click", () => {
    searchPokemon += 1
    renderPokemon(searchPokemon);
});


btnPrev.addEventListener("click", () => {

      if (searchPokemon > 1) {

        searchPokemon -= 1
        renderPokemon(searchPokemon);
    }

});





 renderPokemon(1);