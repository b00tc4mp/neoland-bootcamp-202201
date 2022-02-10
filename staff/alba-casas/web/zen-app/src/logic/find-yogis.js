import { yogis } from "../data";

function findYogis(query) {
  const results = yogis.filter((yogi) =>
    yogi.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  return results;
}

export default findYogis;
