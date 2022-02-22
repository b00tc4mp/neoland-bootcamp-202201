import { Container, Logo, SideBar, StyledInput } from "./styled";
import icon from "../../assets/pokemon.png";
import Select from "../Select";

const Sidebar = ({ pokemonList, setPokemonList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target[0].value;
    console.log(query);
    
  };

  return (
    <SideBar>
      <Container>
        <Logo src={icon} alt="pokemon"></Logo>
        <form onSubmit={handleSubmit} method="post">
          <StyledInput placeholder="Search by name" />
          <Select>
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
          <button type="submit">Filter</button>
        </form>
      </Container>
    </SideBar>
  );
};

export default Sidebar;
