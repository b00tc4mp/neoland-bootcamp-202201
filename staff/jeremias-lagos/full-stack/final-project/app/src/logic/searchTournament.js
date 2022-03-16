import { validators } from 'commons'
const { validateString, validateDate } = validators

function searchTournament(query, location, date) {
    query !== null && validateString(query)
    location !== null && validateString(location)
    date !== null && validateDate(date)

    return fetch(`http://localhost:8080/api/tournaments?${query !== null? `query=${query}` : ''}&${location !== null? `query=${location}` : ''}&${date !== null? `query=${date}` : ''}`, {
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

export default searchTournament