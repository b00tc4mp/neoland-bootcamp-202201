import "./Logo.css";
import icon from "../../assets/image.png";

function Logo() {
  return (
    <div className="logo">
      <img className="logo__icon" src={icon} alt="Calculin"></img>
      <h1>Namaste</h1>
    </div>
  );
}

export default Logo;
