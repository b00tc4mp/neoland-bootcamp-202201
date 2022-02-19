import { retrieveVehiclesOrders } from "../../../logic/logic";
import { useEffect, useState } from "react";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    try {
      retrieveVehiclesOrders(token).then((orders) => setOrders(orders));
    } catch (error) {
      alert(error.message);
    }
  }, [token]);

  return <div>{!!orders.length ? <li>hola</li> : <p>No orders yet :(</p>}</div>;
};

export default Orders;
