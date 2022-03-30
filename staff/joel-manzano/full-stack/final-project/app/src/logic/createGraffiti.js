import { validators } from 'commons'

const {validateToken, validateString } = validators

function createGraffiti(token, artist, description, image, city, address, postalCode, location, style, condition, spray, color) {
    debugger
    validateToken(token)
    validateString(artist, 'artist')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(city, 'city')
    validateString(address, 'address')
    validateString(postalCode, 'postal code') 
    validateString(location, 'location')
    validateString(style, 'style')
    validateString(condition, 'condition')
    validateString(spray, 'spray')
    validateString(color, 'color')

    return fetch('http://localhost:8080/api/graffitis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ artist, description, image, city, address, postalCode, location, style, condition, spray, color })
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