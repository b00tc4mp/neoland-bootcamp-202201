import { randomYogis } from "../../logic";
import "./RandomYogi.css";

const RandomYogi = () => {
  return <p className="random-yogi">"{randomYogis()}"</p>;
};

export default RandomYogi;
