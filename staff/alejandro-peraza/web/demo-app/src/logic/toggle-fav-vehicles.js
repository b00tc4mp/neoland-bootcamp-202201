
    // TODO validate token and id
    // TODO call api to retrieve user favs
    // TODO update favs array (if fav was already there, remove it, if not, add it)
    // TODO call api to update user favs

import { validateToken, validateId } from './helpers/validators'



function toggleFavVehicle(token, id) {
    validateToken(token)
    validateVehicleId(id)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        method: 'PATCH'
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vehicleid })

    })

        .then(res => {
            const { status } = res

            if (status === 200) {

                return res.json()
                    .then(payload => {
                        const { token } = payload

                        return token
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