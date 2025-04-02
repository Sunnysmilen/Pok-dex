type PokemonC = {
  name: string;
  imgSrc?: string;
};

function PokemonCard(props: PokemonC) {
  return (
    <section>
      {props.imgSrc === "" ? <p>???</p> : <img src={props.imgSrc} />}
      {props.name}
    </section>
  );
}

export default PokemonCard;
