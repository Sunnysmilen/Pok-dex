type pokemonC = {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
};

function PokemonCard({ pokemon }: pokemonC) {
  return (
    <figure className="CardDisplay">
      {pokemon.imgSrc === "" ? (
        <p>???</p>
      ) : (
        <img src={pokemon.imgSrc} className="PokemonImage" />
      )}

      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
