import { validateToken } from  './helpers/validators'

function placeVehiclesOrder(token) {
    validateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                return res.json()
                    .then(user => {
                        /*
                        extraer el carrito (cart)
                        extraer las ordenes (orders)

                        si cart vacío entonces lanzar error ('empty cart')

                        crear objeto order {}
                        poner propiedad id
                        poner propiedad date
                        poner propiedad cart

                        poner order en orders

                        poner cart a 0 ([])

                        llamar a api y actualizar el usuario (cart y orders)
                        */

            
                        let { cart = [], orders = [] } = user

                        if (!cart.length) throw new Error('cart is empty') 

                        const id = `ORD-${Date.now()}` // 'ORD-' + number
                        const date = new Date().toISOString()

                        const order = {
                            id,
                            date,
                            cart
                        }

                        orders.push(order)

                        cart = []

                        return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                            method: 'PATCH',
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ cart, orders })
                        })
                            .then(res => {
                                const { status } = res

                                if (status === 204) {
                                    return id
                                } else if (status >= 400 && status < 500) {
                                    return res.json()
                                        .then(payload => {
                                            const { error } = payload

                                            throw new Error(error)
                                        })
                                } else if (status >= 500) {
                                    throw new Error('server error')
                                } else {
                                    throw new Error('unknown error')
                                }
                            })
                    })
            } else if (status >= 400 && status < 500) {
                return res.json()
                    .then(payload => {
                        const { error } = payload

                        throw new Error(error)
                    })
            } else if (status >= 500) {
                throw new Error('server error')
            } else {
                throw new Error('unknown error')
            }
        })
}

export default placeVehiclesOrder