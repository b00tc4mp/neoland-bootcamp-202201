import Logo from "../Logo/Logo";
import RandomYogi from "../RandomYogi/RandomYogi";
import "./Landing.css";

const Landing = ({ onEnter }) => {
  return (
    <div className="landing">
      <Logo />
      <RandomYogi />
      <button
        className="landing__button"
        onClick={() => {
          onEnter();
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default Landing;
