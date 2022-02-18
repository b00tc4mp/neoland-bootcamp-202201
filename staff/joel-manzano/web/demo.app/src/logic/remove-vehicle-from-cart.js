import { validateToken, validateString } from  './helpers/validators'

function removeVehicleFromCart(token, vehicleId) {
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
                        const { cart = [] } = user

                        const item = cart.find(item => item.id === vehicleId)

                        if (!item) throw new Error('item not found')

                        if (item.qty === 1) {
                            cart.splice(cart.indexOf(item), 1)
                        } else {
                            item.qty--
                        }

                        return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                            method: 'PATCH',
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ cart })
                        })
                            .then(res => {
                                const { status } = res

                                if (status === 204) {
                                    return
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

export default removeVehicleFromCart