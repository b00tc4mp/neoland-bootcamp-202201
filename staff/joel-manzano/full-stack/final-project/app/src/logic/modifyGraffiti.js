import { validators } from 'commons'
const { validateToken, validateId, validateString } = validators

function modifyGraffiti(token, graffitiId, artist, description, image, city, address, postalCode, location, style, status, spray, color) {
    validateToken(token)
    validateId(graffitiId)
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

    return fetch(`http://localhost:8080/api/graffiti/${graffitiId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ artist, description, image, city, address, postalCode, location, style, status, spray, color })

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
}

export default modifyGraffiti