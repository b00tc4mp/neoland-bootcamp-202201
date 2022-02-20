function retrieveAllPokemon() {
  return fetch(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
    const { status } = res;

    if (status === 200) {
      return res.json().then((pokemon) => {
        return pokemon;
      });
    } else if (status >= 400 && status < 500) {
      return res.json().then((payload) => {
        const { error } = payload;

        throw new Error(error);
      });
    } else if (status >= 500) {
      throw new Error("server error");
    } else {
      throw new Error("unknown error");
    }
  });
}

export default retrieveAllPokemon;
