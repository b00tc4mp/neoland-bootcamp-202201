import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { retrieveAllPokemon } from "../../logic";
import { Grid, Layout, Main } from "./styled";

const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  const [selectedType, setSelectedType] = useState();

  useEffect(() => {
    // retrieveAllPokemon(0, 6) -> con paginación: offset 0, quantity 6 (desde el 0, pinta los prox 6)
    retrieveAllPokemon()
      .then((pokemon) => {
        setPokemonList(pokemon.results);
      })
      .catch(({ message }) => {
        alert(message);
      });
  }, []);

  const onSelect = (selectedType) => {
    setSelectedType(selectedType);
  };

  return (
    <Layout>
      <Sidebar setPokemonList={setPokemonList} onSelect={onSelect} />
      <Main>
        <Grid>
          {/* Si pokemonList contiene map (en su prototipado), hace el map (Optional Chaining) */}
          {pokemonList?.map((pokemon) => {
            return (
              <Card
                pokemonName={pokemon.name}
                key={pokemon.name}
                selectedType={selectedType}
              />
            );
          })}
        </Grid>
      </Main>
    </Layout>
  );
};

export default Home;
