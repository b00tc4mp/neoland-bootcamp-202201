import { validators } from 'commons'
const { validateToken, validateId } = validators

function deleteProduct(token, productId) {
    validateToken(token)
    validateId(productId)

    return fetch(`http://localhost:8080/api/products/${productId}`, {

        method: 'DELETE',
        headers: {
    
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => {

            const { status } = res

            if (status === 204) return
            else if (status >= 400 && status < 500) {

                return res.json()
                    .then(({ error }) => { 
                        throw new Error(error)
                    })
            }
            else if (status >= 500) throw new Error('server error')
            else throw new Error('unknown error')
        })
}

export default deleteProduct