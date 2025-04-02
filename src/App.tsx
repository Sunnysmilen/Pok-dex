import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
    imgSrc: "",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState({ name: "bulbasaur" });

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon === null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <p>{pokemonName.name}</p>
      <button
        type="button"
        onClick={() =>
          setPokemonName({
            name: "Bulbasaur",
          })
        }
      >
        Bulbasaur
      </button>
      <button type="button" onClick={() => setPokemonName({ name: "Mew" })}>
        Mew
      </button>
    </div>
  );
}

export default App;
