import "../App";

type Pokemon = {
  name: string;
  imgSrc?: string;
};

type NavBarProps = {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
};

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <div>
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
    </div>
  );
}
export default NavBar;
