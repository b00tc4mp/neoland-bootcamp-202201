import { useState } from "react";
import Details from "./Details/Details";
import Results from "./Results/Results";
import "./Search.css";

function Search({ token }) {
  const [query, setQuery] = useState();
  const [view, setView] = useState();
  const [vehicleId, setVehicleId] = useState();
  const search = (event) => {
    event.preventDefault();

    const query = event.target.query.value;

    setQuery(query);

    showResults();
  };

  const goToDetail = (id) => {
    setVehicleId(id);
    setView("detail");
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
        />
        <button>Search</button>
      </form>
      {view === "results" && <Results query={query} onItem={goToDetail} />}
      {view === "detail" && (
        <Details token={token} onBack={showResults} vehicleId={vehicleId} />
      )}
    </div>
  );
}

export default Search;
