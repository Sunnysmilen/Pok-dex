import "./App.css";
import PokemonCard from "./components/PokemonCard";

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
  return (
    <>
      <PokemonCard
        name={"bulbasaur"}
        imgSrc={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      />
      <PokemonCard name={"Mew"} imgSrc="" />
    </>
  );
}

export default App;
