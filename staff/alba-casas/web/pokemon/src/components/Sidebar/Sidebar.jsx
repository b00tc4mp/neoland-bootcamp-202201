import { Container, Logo, SideBar, StyledInput } from "./styled";
import icon from "../../assets/pokemon.png";
import Select from "../Select";
import retrieveAllPokemon from "../../logic/retrieveAllPokemon";

const Sidebar = ({ setPokemonList, onSelect }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    retrieveAllPokemon().then((allPokemon) => {
      const query = event.target[0].value;
      const result = allPokemon.results.filter((pokemon) => {
        return pokemon.name.includes(query);
      });
      setPokemonList(result);
    });
  };

  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <SideBar>
      <Container>
        <Logo src={icon} alt="pokemon"></Logo>
        <form onSubmit={handleSubmit} method="post">
          <StyledInput placeholder="Search by name" />
          <Select onChange={handleChange}>
            <option value="">Any type</option>
            <option value="water">WATER</option>
            <option value="fire">FIRE</option>
            <option value="grass">GRASS</option>
            <option value="bug">BUG</option>
            <option value="normal">NORMAL</option>
            <option value="electric">ELECTRIC</option>
            <option value="psychic">PSYCHIC</option>
            <option value="rock">ROCK</option>
            <option value="ghost">GHOST</option>
            <option value="poison">POISON</option>
            <option value="fighting">FIGHTING</option>
            <option value="ground">GROUND</option>
            <option value="ice">ICE</option>
            <option value="dragon">DRAGON</option>
          </Select>
        </form>
      </Container>
    </SideBar>
  );
};

export default Sidebar;
