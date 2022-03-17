import { validators } from 'commons'
const { validateString } = validators

function findProducts(query, description) {
    query !== null && validateString(query)
    description !== null && validateString(description)

    return fetch(`http://localhost:8080/api/products?${query !== null? `query=${query}` : ''}&${description !== null? `description=${description}` : ''}`,{
        headers: { }
    
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                return res.json()
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

export default findProducts