import { validators } from 'commons'
const { validateString, validateDate, validateToken} = validators

function createTournament(token, title, description, location, date) {
    validateToken(token)
   /*  validateString(title)
    validateString(description)
    validateString(location) */
    validateDate(date)

    return fetch('http://localhost:8080/api/tournaments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, description, location, date })
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

export default createTournament