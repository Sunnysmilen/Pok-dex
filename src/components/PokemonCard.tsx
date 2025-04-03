type pokemonC = {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
};

function PokemonCard({ pokemon }: pokemonC) {
  return (
    <section className="CardDisplay">
      {pokemon.imgSrc === "" ? <p>???</p> : <img src={pokemon.imgSrc} />}
      {pokemon.name}
    </section>
  );
}

export default PokemonCard;
