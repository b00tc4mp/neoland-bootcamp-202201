import { Container, Logo, SideBar } from "./styled";
import icon from "../../assets/pokemon.png";

const Sidebar = () => {
  return (
    <SideBar>
      <Container>
        <Logo src={icon} alt="pokemon"></Logo>
        <input placeholder="search pokemon"></input>
      </Container>
    </SideBar>
  );
};

export default Sidebar;
