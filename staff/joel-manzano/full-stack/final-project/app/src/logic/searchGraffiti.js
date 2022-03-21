import { validators } from 'commons'
const { validateString } = validators

function searchGraffiti(query, artist, city, postalCode, style, status, spray, colors) {
    query !== null && validateString(query)
    artist !== null && validateString(artist)
    city !== null && validateString(city)
    postalCode !== null && validateString(postalCode)
    style !== null && validateString(style)
    status !== null && validateString(status)
    spray !== null && validateString(spray)
    colors !== null && validateString(colors)

    return fetch(`http://localhost:8080/api/graffitis?${query !== null? `query=${query}` : ''}&${artist !== null? `query=${artist}` : ''}&${city !== null? `query=${city}` : ''}&${postalCode !== null? `query=${postalCode}` : ''}&${style !== null? `query=${style}` : ''}&${status !== null? `query=${status}` : ''}&${spray !== null? `query=${spray}` : ''}&${colors !== null? `query=${colors}` : ''}`, {
        headers: {  }
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

export default searchGraffiti