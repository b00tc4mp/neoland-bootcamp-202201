import { useState, useEffect } from "react";
import retrieveVehicle from "../../../../logic/logic/retrieve-vehicle";
import Search from "../Search";
import "./Details.css";

function Details({ vehicleId }) {
  const [view, setView] = useState();
  const [vehicle, setVehicle] = useState({});

  const showSearch = () => setView("search");

  useEffect(() => {
    try {
      retrieveVehicle(vehicleId).then((vehicle) => setVehicle(vehicle));
    } catch ({ message }) {
      alert(message);
    }
  }, []);

  return (
    <div className="details">
      {vehicle.id && view !== "search" && (
        <>
          <div className="details__header">
            <h2> {vehicle.name}</h2>
            <p>{vehicle.year}</p>
          </div>
          <img
            className="details__image"
            src={vehicle.image}
            alt="Vehicle"
          ></img>
          <p>{vehicle.price}</p>
          <p>{vehicle.maker}</p>
          <p>{vehicle.color}</p>
          <p>{vehicle.description}</p>
          <p>{vehicle.url}</p>
          <button
            onClick={(event) => {
              event.preventDefault();

              showSearch();
            }}
          >
            Back
          </button>
          {view === "search" && <Search />}
        </>
      )}
    </div>
  );
}

export default Details;
