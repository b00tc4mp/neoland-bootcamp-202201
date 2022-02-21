import { Container, Logo, SideBar, StyledInput } from "./styled";
import icon from "../../assets/pokemon.png";
import Select from "../Select";

const Sidebar = () => {
  return (
    <SideBar>
      <Container>
        <Logo src={icon} alt="pokemon"></Logo>
        <form method="post">
          <StyledInput placeholder="Search by name" />
          <Select>
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
