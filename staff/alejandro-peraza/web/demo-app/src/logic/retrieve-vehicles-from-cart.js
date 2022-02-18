import { validateToken } from './helpers/validators'

function retrieveVehiclesFromCart(token) {
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
                        const { cart = [], favs = [] } = user

                        if (!cart.length) return []

                        const fetches = cart.map(item => {
                            return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${item.id}`)
                                .then(res => {
                                    const { status } = res

                                    if (status === 200) {
                                        return res.json()
                                            .then(vehicle => {
                                                vehicle.qty = item.qty

                                                vehicle.total = vehicle.price * vehicle.qty

                                                vehicle.isFav = favs.includes(vehicle.id)

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

export default retrieveVehiclesFromCart