import "./Search.css";
import Results from "../Results/Results";
import { findYogis } from "../../logic";
import { useState } from "react";

const Search = () => {
  const [results, setResults] = useState();
  const [feedBack, setFeedback] = useState();

  const search = (event) => {
    event.preventDefault();
    const query = event.target.query.value;

    try {
      const yogis = findYogis(query);
      setFeedback();
      setResults(yogis);
    } catch ({ message }) {
      setResults();
      setFeedback(`${message}💛`);
    }
  };
  return (
    <>
      <form onSubmit={search}>
        <input
          className="search__input"
          type="text"
          name="query"
          placeholder="search ☯︎"
        ></input>
        <button className="search__button">Search</button>
        {feedBack && <p className="search__feedback">{feedBack}</p>}
      </form>
      <Results items={results} />
    </>
  );
};

export default Search;
