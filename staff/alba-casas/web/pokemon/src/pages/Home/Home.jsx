import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import { retrieveAllPokemon } from "../../logic";
import { Grid, Layout, Main } from "./styled";

const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  const [selectedType, setSelectedType] = useState();
  const [shouldOnlyShowFavs, setShouldOnlyShowFavs] = useState(false);

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

  const onChecked = (checked) => {
    setShouldOnlyShowFavs(checked);
  };

  return (
    <Layout>
      <Sidebar
        setPokemonList={setPokemonList}
        onSelect={onSelect}
        onChecked={onChecked}
      />
      <Main>
        <Grid>
          {/* Si pokemonList contiene map (en su prototipado), hace el map (Optional Chaining) */}
          {pokemonList?.map((pokemon) => {
            return (
              <Card
                pokemonName={pokemon.name}
                key={pokemon.name}
                selectedType={selectedType}
                shouldOnlyShowFavs={shouldOnlyShowFavs}
              />
            );
          })}
        </Grid>
      </Main>
    </Layout>
  );
};

export default Home;
