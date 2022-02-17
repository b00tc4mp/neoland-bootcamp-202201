import { useState, useEffect } from "react";
import retrieveVehicle from "../../../../logic/logic/retrieve-vehicle";
import { toggleFavVehicle } from "../../../../logic/logic";
import "./Details.css";

function Details({ token, vehicleId, onBack }) {
  const [vehicle, setVehicle] = useState({});
  const [fav, setFav] = useState(false);

  useEffect(() => {
    try {
      retrieveVehicle(token, vehicleId)
        .then((vehicle) => {
          setVehicle(vehicle);
          setFav(vehicle.isFav);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, [token, vehicleId]);

  const onFavClick = () => {
    try {
      toggleFavVehicle(token, vehicleId)
        .then(() => setFav(!fav))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="details">
      {vehicle.id && (
        <>
          <div className="details__header">
            <h2>{vehicle.name}</h2>
            <p>{vehicle.year}</p>
            <span className="details__fav" onClick={onFavClick}>
              {fav ? "♥️" : "🤍"}
            </span>
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
          <a href={vehicle.url}>Go to original store</a>
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
