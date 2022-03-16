import { validators } from 'commons'
const { validateToken, validateId, validateString, validateDate } = validators

function updateTournament(token, tournamentId, title, description, location, image, date) {
    validateToken(token)
    validateId(tournamentId)
    validateString(title)
    validateString(description)
    validateString(location)
    validateString(image)
    validateDate(date)

    return fetch(`http://localhost:8080/api/tournaments/${tournamentId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, location, image, date })

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

export default updateTournament