import { useState, useEffect } from "react";
import retrieveVehicle from "../../../../logic/logic/retrieve-vehicle";
import "./Details.css";

function Details({ vehicleId, onBack }) {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    try {
      retrieveVehicle(vehicleId).then((vehicle) => setVehicle(vehicle));
    } catch ({ message }) {
      alert(message);
    }
  }, [vehicleId]);

  return (
    <div className="details">
      {vehicle.id && (
        <>
          <div className="details__header">
            <h2>{vehicle.name}</h2>
            <p>{vehicle.year}</p>
          </div>
          <img
            className="details__image"
            src={vehicle.image}
            alt="Vehicle"
          ></img>
          <div className="details__info">
            <p>Price: {vehicle.price}$</p>
            <p>Maker: {vehicle.maker}</p>
            <p>Color: {vehicle.color}</p>
          </div>
          <p>{vehicle.description}</p>
          <p>{vehicle.url}</p>
          <button
            onClick={(event) => {
              event.preventDefault();
              onBack();
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default Details;
