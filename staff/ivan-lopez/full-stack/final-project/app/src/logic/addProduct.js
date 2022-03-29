import { validators } from 'commons'
const { validateString, validateToken } = validators

function addProduct(token, name, image, size, color, price, description) {
    validateToken(token)
    validateString(name)
    validateString(size)
    validateString(image)
    validateString(color)
    validateString(price)
    validateString(description)

    return fetch('http://localhost:8080/api/products/', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, image, size, color, price, description })
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

export default addProduct