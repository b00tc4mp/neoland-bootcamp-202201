import { validators } from 'commons'

const { validateId, validateString } = validators

function createGraffiti(userId, artist, description, image, city, address, postalCode, location, style, status, spray, color) {
    validateId(userId, 'userId')
    validateString(artist, 'artist')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(city, 'city')
    validateString(address, 'address')
    validateString(postalCode, 'postal code') 
    validateString(location, 'location')
    validateString(style, 'style')
    validateString(status, 'status')
    validateString(spray, 'spray')
    validateString(color, 'color')

    return fetch('http://localhost:8080/api/graffiti', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ artist, description, image, city, address, postalCode, location, style, status, spray, color })
    })
        .then(res => {
            const { status } = res

            if (status === 201) {
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

export default createGraffiti