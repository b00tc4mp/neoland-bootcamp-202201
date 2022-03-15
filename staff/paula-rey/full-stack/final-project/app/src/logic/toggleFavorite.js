import { validators } from 'commons'
import { validateId } from 'commons/src/validators'

const { validateToken } = validators

function toggleFavorite(token, locationId) {
    validateToken(token)
    validateId(locationId, 'locationId')

    return fetch(`http://localhost:8080/api/users/favorites/${locationId}`, {
        method: 'PATCH',  
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
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
}

export default toggleFavorite