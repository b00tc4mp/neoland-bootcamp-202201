import { yogis } from "../data";
import { randomInteger } from "../utils";

function randomYogis() {
  const index = randomInteger(0, yogis.length - 1);

  return yogis[index];
}

export default randomYogis;
