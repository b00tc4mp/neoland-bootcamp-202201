import { retrieveVehiclesOrders } from "../../../logic/logic";
import { useLayoutEffect, useState } from "react";
import { retrieveVehiclesFromOrder } from "../../../logic/logic/";

const Orders = ({ token }) => {
  const [vehicles, setVehicles] = useState();
  const [orders, setOrders] = useState();
  useLayoutEffect(() => {
    try {
      retrieveVehiclesOrders(token).then((orders) => setOrders(orders));
    } catch (error) {
      alert(error.message);
    }
  }, [token]);

  const handleOrderClick = (order) => {
    retrieveVehiclesFromOrder(order)
      .then((vehicles) => {
        setVehicles(vehicles);
      })
      .catch(({ message }) => {
        alert(message);
      });
  };

  return (
    <div>
      {orders &&
        (!!orders.length ? (
          <ul>
            {orders.map((order) => (
              <>
                <li onClick={() => handleOrderClick(order)} key={order.id}>
                  <h2>{order.id}</h2>
                </li>
              </>
            ))}
          </ul>
        ) : (
          <p>No orders yet </p>
        ))}
      {!!vehicles && (
        <div>
          {vehicles.map((vehicle) => {
            return (
              <div key={vehicle.id}>
                <span>{vehicle.id}</span>
                <img src={vehicle.image} alt="vehicle" />
                <span>{vehicle.qty}</span>
              </div>
            );
          })}
          <p>{vehicles.total} $</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
