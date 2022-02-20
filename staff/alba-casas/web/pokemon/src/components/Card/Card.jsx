import React, { useState, useEffect } from "react";
import icon from "../../assets/pokeball.png";
import { retrievePokemonByName } from "../../logic";
import {
  Pokeball,
  StyledCard,
  Header,
  PokemonImg,
  CircleBackground,
  Container,
  PokemonName,
  TypeCircle,
  Stats,
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

  return (
    <StyledCard>
      <Header type={apiPokemon?.types[0].type.name}>
        <Pokeball
          isFav={isFav}
          src={icon}
          alt="pokeball"
          onClick={handleFavClick}
        />
      </Header>
      <Container>
        <CircleBackground>
          {/* Optional chaining: Coge la propiedad SOLO SI PUEDE (si apiPokemon es un objeto que contiene sprites) */}
          <PokemonImg src={apiPokemon?.sprites?.front_default} alt="pokemon" />
        </CircleBackground>
        <PokemonName>{pokemonName}</PokemonName>
        <TypeCircle type={apiPokemon?.types[0].type.name}>
          {apiPokemon?.types[0].type.name}
        </TypeCircle>
      </Container>
      <Footer>
        <Stats>
          <span>Exp</span>
          <span>{apiPokemon?.base_experience} pts</span>
        </Stats>
        <Stats>
          <span>Height</span>
          <span>{apiPokemon?.height} m</span>
        </Stats>
        <Stats>
          <span>Weight</span>
          <span>{apiPokemon?.height} kg</span>
        </Stats>
      </Footer>
    </StyledCard>
  );
};

export default Card;
