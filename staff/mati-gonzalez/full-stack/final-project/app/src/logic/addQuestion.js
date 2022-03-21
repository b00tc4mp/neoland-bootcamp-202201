import { validators } from 'commons'

const { validateString, valdiateToken } = validators

function addQuestion(token, text, categories) {
    valdiateToken(token)
    validateString(text, 'text')
    
    return fetch('http://localhost:8080/api/actions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, categories })
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

export default addQuestion