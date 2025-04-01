export default PokemonCard;

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

function PokemonCard() {
  const pokemon = pokemonList[1];
  type pokemon = { name: string; imgSrc: string };

  return (
    <div>
      {pokemon.name}
      {pokemon.imgSrc === "" ? <p>???</p> : <img src={pokemon.imgSrc} />}
    </div>
  );
}
