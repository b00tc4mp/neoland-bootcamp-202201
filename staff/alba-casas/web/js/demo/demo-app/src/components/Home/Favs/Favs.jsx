import React, { useState, useEffect } from "react";
import { retrieveFavVehicles, toggleFavVehicle } from "../../../logic/logic";

const Favs = ({ token }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    try {
      retrieveFavVehicles(token)
        .then((vehicles) => {
          setVehicles(vehicles);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, [token]);

  /* const goToItem = (id) => {
    onItem(id);
    (TODO)
  }; */

  const removeFav = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      {!!vehicles.length && (
        <li>
          {vehicles.map((vehicle) => (
            <li key={vehicle.id}>
              <h2>{vehicle.name}</h2>
              <span className="details__fav">♥️</span>
              <img src={vehicle.image} alt="vehicle"></img>
              <span>{vehicle.price} $</span>
            </li>
          ))}
        </li>
      )}
    </div>
  );
};

export default Favs;
