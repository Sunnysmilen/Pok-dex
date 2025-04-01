export default PokemonCard;

function PokemonCard({ pokemon }) {
  // type pokemon = { name: string; imgSrc: string };

  return (
    <div>
      {pokemon.name}
      {pokemon.imgSrc === "" ? <p>???</p> : <img src={pokemon.imgSrc} />}
    </div>
  );
}
