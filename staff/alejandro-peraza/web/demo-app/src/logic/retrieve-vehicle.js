import { validateToken, validateString } from './helpers/validators'

function retrieveVehicle(token, vehicleId) {
    validateToken(token)
    validateString(vehicleId, 'id')

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
                        const { favs = [] } = user

                        return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`)
                            .then(res => {
                                const { status } = res

                                if (status === 200) {
                                    return res.json()
                                        .then(vehicle => {
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

export default retrieveVehicle