import { validateToken, validateString } from './helpers/validators'

function toggleFavVehicle(token, vehicleId) {
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

                        const index = favs.indexOf(vehicleId)

                        if (index === -1)
                            favs.push(vehicleId)
                        else
                            favs.splice(index, 1)

                        return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                            method: 'PATCH',
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ favs })
                        })
                            .then(res => {
                                const { status } = res

                                if (status === 204) {
                                    // TODO manage happy path
                                    return
                                } else if (status >= 400 && status < 500) {
                                    // DONE manage client error
                                    return res.json()
                                        .then(payload => {
                                            const { error } = payload

                                            throw new Error(error)
                                        })
                                } else if (status >= 500) {
                                    // DONE manage server error
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

export default toggleFavVehicle