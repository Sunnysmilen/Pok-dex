import { useState } from "react";

type pokemonC = {
  pokemon: {
    name: string;
    type: string;
    imgSrc?: string;
  };
};

function PokemonCard({ pokemon }: pokemonC) {
  const [color, setColor] = useState(pokemon.type);

  // const pokemonType = () => {
  //   setColor(pokemon.type);

  //   if (pokemon.type === "Plante") {
  //     pokemonType();
  //   }

  return (
    <figure className="CardDisplay">
      {pokemon.imgSrc === "" ? (
        <p>???</p>
      ) : (
        <img src={pokemon.imgSrc} className="PokemonImage" />
      )}

      <h2>{pokemon.name}</h2>
      <br />
    </figure>
  );
}

export default PokemonCard;
