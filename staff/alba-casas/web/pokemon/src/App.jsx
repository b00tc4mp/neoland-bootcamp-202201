import Card from "./components/Card";
import { retrieveAllPokemon } from "./logic";
import { useEffect, useState } from "react";

function App() {
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
    <div>
      {/* Si pokemonList contiene map (en su prototipado), hace el map (Optional Chaining) */}
      {pokemonList?.map((pokemon) => {
        return <Card pokemonName={pokemon.name} />;
      })}
    </div>
  );
}

export default App;
