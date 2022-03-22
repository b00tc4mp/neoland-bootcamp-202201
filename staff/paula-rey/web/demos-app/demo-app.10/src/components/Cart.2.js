//version Cart/CartDetails
import OrderDetails from './OrderDetails'
import { useEffect, useState } from 'react'
import CartDetails from './CartDetails'

function Cart({ token, onItem }) { // el onItem habrá que pasarlo como prop

    const [view, setView] = useState('cart-details')

    const showOrderDetails = () => setView('order-details')

    useEffect(() => {}, [])




    return <div className="cart">
        {view === 'cart-details' && 
            <CartDetails token={token} onItem={onItem} onOrderDetails={showOrderDetails}/>
        }


        {view === 'order-details' && <OrderDetails />}


    </div>
}

export default Cart