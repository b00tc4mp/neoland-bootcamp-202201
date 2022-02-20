import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { retrieveAllPokemon } from "../../logic";
import { Grid, Layout } from "./styled";

const Home = () => {
  const [pokemonList, setPokemonList] = useState();

  useEffect(() => {
    retrieveAllPokemon()
      .then((pokemon) => {
        setPokemonList(pokemon.results);
      })
      .catch(({ message }) => {
        alert(message);
      });
  }, []);
  return (
    <Layout>
      <Grid>
        {/* Si pokemonList contiene map (en su prototipado), hace el map (Optional Chaining) */}
        {pokemonList?.map((pokemon) => {
          return <Card key={pokemon.name} pokemonName={pokemon.name} />;
        })}
      </Grid>
    </Layout>
  );
};

export default Home;
