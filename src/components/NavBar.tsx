import { useState } from "react";
import "../App";

type Pokemon = {
  pickachu: string;
  name: string;
  imgSrc?: string;
  type: string;
};

type NavBarProps = {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
};

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  const handleClick = (pokemonName: string) => {
    setPokemonName(pokemonName);
    if (pokemonName === "Pikachu") {
      alert("PikaPika Pikachu!");
    }
  };

  return (
    <div>
      <nav>
        <ul className="PokeList">
          {pokemonList.map((pokemon) => (
            <li key={pokemon.name} className="PokeCard">
              <button type="button" onClick={() => handleClick(pokemon.name)}>
                {pokemon.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
