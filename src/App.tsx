import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
// import { useEffect } from "react";
import { useState } from "react";

const pokemonList = [
  {
    name: "Bulbasaur",
    type: "Plante",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    type: "Feu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    type: "   Eau  ",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    type: "Electrique",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
    type: "Psychique",
    imgSrc:
      "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/151/regular.png",
  },
  {
    name: "Caninos",
    type: "Feu",
    imgSrc:
      "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/58/regular_hisui.png",
  },
  {
    name: "Mélofée",
    type: "Fée",
    imgSrc:
      "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/35/regular.png",
  },
  {
    name: "Goupix",
    type: "Feu",
    imgSrc:
      "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/37/regular.png",
  },
  {
    name: "Capumain",
    type: "Normal",
    imgSrc:
      "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/190/regular.png",
  },
  {
    name: "Métamorph",
    type: "Normal",
    imgSrc:
      "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/132/regular.png",
  },
];
function App() {
  // useEffect(() => {
  //   alert("Hello pokemon trainer");
  // });

  const [pokemonName, setPokemonName] = useState("Bulbasaur");
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <h1>PokeDex</h1>

      <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
