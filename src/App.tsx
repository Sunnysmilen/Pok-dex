import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
    imgSrc: "",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("Bulbasaur");
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <>
      <div>
        <h1>PokeDex</h1>
        <nav>
          <ul className="PokeList">
            {pokemonList.map((pokemon) => (
              <li key={pokemon.name} className="PokeCard">
                <button
                  type="button"
                  onClick={() => setPokemonName(pokemon.name)}
                >
                  {pokemon.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <PokemonCard pokemon={pokemon} />
      </div>
    </>
  );
}

export default App;
