import { validators } from 'commons'

const { validateString, validateNumber, validateBoolean, valdiateToken } = validators

function createAction(token, description, public, requiredTime, requiredBudget) {
    valdiateToken(token)
    validateString(description, 'description')
    validateBoolean(public, 'public')
    validateNumber(requiredTime, 'required time')
    validateNumber(requiredBudget, 'required budget')

    return fetch('http://localhost:8080/api/actions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, public, requiredTime, requiredBudget })
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

export default createAction