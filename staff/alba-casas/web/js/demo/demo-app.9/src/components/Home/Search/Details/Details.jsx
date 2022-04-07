import { useState, useEffect } from "react";
import retrieveVehicle from "../../../../logic/logic/retrieve-vehicle";
import { addVehicleToCart, toggleFavVehicle } from "../../../../logic/logic";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details({ token, onBack }) {
  const [vehicle, setVehicle] = useState({});
  const [fav, setFav] = useState(false);
  const { vehicleId } = useParams();

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

  const addToCart = () => {
    try {
      addVehicleToCart(token, vehicleId)
        .then(() => alert("Vehicle added to cart"))
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
          <button className="details__button" onClick={addToCart}>
            Add to cart
          </button>
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
