import { useState } from "react";
import searchVehicles from "../../logic/logic/search-vehicle";
import Detail from "../Details/Details";
import "./Search.css";

function Search() {
  const [vehicles, setVehicles] = useState([]);

  const search = (event) => {
    event.preventDefault();

    const query = event.target.query.value;

    try {
      searchVehicles(query)
        .then((vehicles) => setVehicles(vehicles))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={search}>
        <input
          className="search__query-input"
          type="text"
          name="query"
          placeholder="query"
        />
        <button>Search</button>
      </form>
      {/* doble negacion, consigue un valor booleano true o false, en este caso
        consigue un valor de false  */}
      {!!vehicles.length && (
        <ul className="search__results-list">
          {vehicles.map((vehicle) => (
            <li>
              <h2>{vehicle.name}</h2>
              <img src={vehicle.thumbnail} alt="vehicle" />
              <span>{vehicle.price} $</span>
            </li>
          ))}
        </ul>
      )}
      <Detail />
    </div>
  );
}

export default Search;
