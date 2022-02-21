    import './Orders.css'
    import { useEffect, useState } from 'react'
    import { retrieveUserOrders } from '../logic'
    
    function Orders({ token, onOrder }) {
        const [orders, setOrders] = useState()
    
        useEffect(() => {
            try {
                retrieveUserOrders(token)
                    .then(orders => setOrders(orders))
                    .catch(error => alert(error.message))
            }
            catch ({ message }) {
                alert(message)
            }
        }, [])
    
        const goToOrder = id => {
            onOrder(id)
        }
    
        return <div className="orders">
            {orders && (orders.length ? <div> <ul className="orders-list">
                {orders.slice(0).reverse().map(order => <li key={order.id} className="orders__list-item" onClick={() => goToOrder(order.id)}>
                    <h2 className="orders__id">ID: {order.id} - Date: {order.date}</h2>
                </li>)}
            </ul>
            </div> : <p className="orders__empty">No orders yet</p>)}
        </div>
    }
    
    export default Orders

    