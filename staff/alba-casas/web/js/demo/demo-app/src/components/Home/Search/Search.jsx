import { useState } from "react";
import Results from "./Results/Results";
import "./Search.css";

function Search({ token, onItem, onQuery, query }) {
  const [view, setView] = useState(query && "results");

  const search = (event) => {
    event.preventDefault();

    const query = event.target.query.value;

    onQuery(query);

    showResults();
  };

  const showResults = () => setView("results");

  return (
    <div className="search">
      <form className="search__form" onSubmit={search}>
        <input
          className="search__query-input"
          type="text"
          name="query"
          placeholder="search"
          defaultValue={query}
        />
        <span className="search__icon">🔍</span>
      </form>
      {view === "results" && (
        <Results token={token} query={query} onItem={onItem} />
      )}
    </div>
  );
}

export default Search;
