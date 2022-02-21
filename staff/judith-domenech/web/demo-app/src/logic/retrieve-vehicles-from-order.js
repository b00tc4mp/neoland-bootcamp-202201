import { validateToken, validateString } from './helpers/validators'

function retrieveVehiclesFromOrder(token, orderId) {
    validateToken(token)
    validateString(orderId)

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

                        const { orders = [] } = user

                        if (!orders.length) throw new Error('no orders placed yet')

                        const order = orders.find(order => order.id === orderId)

                        const { cart = [] } = order

                        if (!cart.length) throw new Error('no cart in the order')

                        const fetches = cart.map((item) => {
                            return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${item.id}`)
                                .then(res => {
                                    const { status } = res

                                    if (status === 200) {
                                        return res.json()
                                            .then(vehicle => {
                                                vehicle.qty = item.qty
                                                vehicle.total = vehicle.price * vehicle.qty

                                                return vehicle
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
                        })
                        return Promise.all(fetches)
                            .then(vehicles => {
                                const total = vehicles.reduce((acc, vehicle) => vehicle.total + acc, 0)

                                vehicles.total = total

                                return vehicles
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

export default retrieveVehiclesFromOrder