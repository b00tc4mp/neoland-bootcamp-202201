import React from "react";
import Spinner from "../../Spinner";
import { CircleBackground, PokemonImg } from "./styled";

const Image = ({ src }) => {
  return (
    <CircleBackground>
      {src ? <PokemonImg src={src} alt="pokemon" /> : <Spinner />}
    </CircleBackground>
  );
};

export default Image;
