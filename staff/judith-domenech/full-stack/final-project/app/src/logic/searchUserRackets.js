import { validators } from 'commons'

const { validateToken, validateString } = validators

function searchUserRackets(token, type, weight, player, level) {
validateToken(token, 'token')
validateString(type, 'type')
validateString(weight, 'weight')
validateString(player, 'player')
validateString(level, 'level')

    return fetch(`http://localhost:8080/api/rackets/search?type=${type}&weight=${weight}&player=${player}&level=${level}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
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

export default searchUserRackets