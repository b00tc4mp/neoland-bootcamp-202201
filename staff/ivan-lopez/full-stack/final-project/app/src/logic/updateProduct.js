import { validators } from 'commons'
const { validateToken, validateId, validateString } = validators

function updateProduct(token, productId, name, image, size, color, price, description) {

    validateToken(token)
    validateId(productId, 'productId')
    validateString(name, 'name')
    validateString(image, 'image')
    validateString(size, 'size')
    validateString(color, 'color')
    validateString(price, 'price')
    validateString(description, 'description')


    return fetch(`http://localhost:8080/api/products/${productId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, image, size, color, price, description })
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

export default updateProduct