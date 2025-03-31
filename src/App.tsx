import "./App.css";

function App() {
  return (
    <figure>
      <h1>PokemonCard</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbasaur"
      />
      <figcaption>
        {" "}
        Bulbasaur are small, amphibian and plant Pokémon that move on all four
        legs. They have blue-green bodies with darker blue-green spots. The seed
        on a Bulbasaur's back is planted at birth and then sprouts and grows
        along with it. The bulb absorbs sunlight which allows it to grow.
      </figcaption>
    </figure>
  );
}

export default App;
