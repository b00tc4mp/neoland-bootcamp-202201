import { validateToken } from './helpers/validators'

function retrieveFavVehicles(token) {
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
                        const { favs = [] } = user

                        if (!favs.length) return []

                        return new Promise((resolve, reject) => {
                            const vehicles = []

                            let count = 0

                            favs.forEach((vehicleId, index) => {
                                return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`)
                                    .then(res => {
                                        const { status } = res

                                        if (status === 200) {
                                            return res.json()
                                                .then(vehicle => {
                                                    vehicle.isFav = true

                                                    vehicles[index] = vehicle

                                                    count++

                                                    if (count === favs.length) {
                                                        resolve(vehicles)
                                                    }
                                                })
                                        } else if (status >= 400 && status < 500) {
                                            return res.json()
                                                .then(payload => {
                                                    const { error } = payload

                                                    reject(new Error(error))
                                                })
                                        } else if (status >= 500) {
                                            reject(new Error('server error'))
                                        } else {
                                            reject(new Error('unknown error'))
                                        }
                                    })
                            })
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

export default retrieveFavVehicles