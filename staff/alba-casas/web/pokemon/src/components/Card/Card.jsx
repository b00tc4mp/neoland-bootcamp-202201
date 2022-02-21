import React, { useState, useEffect } from "react";
import icon from "../../assets/pokeball.png";
import { retrievePokemonByName } from "../../logic";
import Stat from "./Stat";
import Image from "./Image";
import {
  Pokeball,
  StyledCard,
  Header,
  Container,
  PokemonName,
  TypeCircle,
  Footer,
} from "./styled";

const Card = ({ pokemonName }) => {
  const [apiPokemon, setApiPokemon] = useState();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    try {
      retrievePokemonByName(pokemonName).then((apiPokemon) => {
        setApiPokemon(apiPokemon);
      });
    } catch ({ message }) {
      alert(message);
    }
  }, [pokemonName]);

  const handleFavClick = () => {
    // settea isFav como el valor contrario del que ya tenga (si es true lo pone a false y viceversa)
    setIsFav(!isFav);
  };

  const pokemonType = apiPokemon?.types[0].type.name;
  const pokemonImage = apiPokemon?.sprites?.front_default;

  return (
    <StyledCard>
      <Header type={pokemonType}>
        <Pokeball
          isFav={isFav}
          src={icon}
          alt="pokeball"
          onClick={handleFavClick}
        />
      </Header>
      <Container>
        {/* Optional chaining: Coge la propiedad SOLO SI PUEDE (si apiPokemon es un objeto que contiene sprites) */}
        <Image src={pokemonImage} />
        <PokemonName>{pokemonName}</PokemonName>
        <TypeCircle type={pokemonType}>{pokemonType}</TypeCircle>
      </Container>
      <Footer>
        <Stat title="Exp">{apiPokemon?.base_experience} pts</Stat>
        <Stat title="Height">{apiPokemon?.height / 10} m</Stat>
        <Stat title="Weight">{apiPokemon?.weight / 10} kg</Stat>
      </Footer>
    </StyledCard>
  );
};

export default Card;
