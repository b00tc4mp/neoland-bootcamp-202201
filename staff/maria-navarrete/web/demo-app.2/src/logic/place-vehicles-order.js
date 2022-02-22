import { validateToken } from './helpers/validators'
import { generateOrderDate, generateOrderId } from './helpers/helpers'

function placeVehiclesOrder(token) {
    validateToken(token)

    const orderId = generateOrderId()
    const orderDate = generateOrderDate()

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
                        let { cart = [], orders = [] } = user

                        if (!cart.length) throw new Error('cart is empty')

                        else {
                            const order = { id: orderId, date: orderDate, cart }

                            orders.push(order)

                            cart = []

                            return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                                method: 'PATCH',
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ orders, cart })
                            })
                                .then(res => {
                                    const { status } = res

                                    if (status === 204) {
                                        return orderId
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