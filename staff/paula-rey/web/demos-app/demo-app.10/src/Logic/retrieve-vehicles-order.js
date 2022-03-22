import { validateToken, validateString } from "./helpers/validators";

function retrieveVehiclesOrder(token, orderId) {
    validateToken(token)
    validateString(orderId)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers: {
            Authorization: `Barer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                return res.json()
                    .then(user => {
                        // const orders = user.orders || []
                        const { orders = [] } = user
                        
                        if (!orders.length) throw new Error('no orders')

                        return orders.find(order => order.id === orderId)
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

export default retrieveVehiclesOrder