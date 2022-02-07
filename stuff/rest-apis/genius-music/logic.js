const GENIUS_TOKEN = 'm8y23sAjOI2YzXGRcJncMWwiqQOE1nlJqQ1dAltdrE-5mRHtO-U26i9ZHoVLpQp-'

function searchArtists(query) {
    return fetch(`https://b00tc4mp.herokuapp.com/proxy?url=https://api.genius.com/search?q=${query}`, {
        headers: {
            Authorization: `Bearer ${GENIUS_TOKEN}`
        }
    })
        .then(res => res.json())
        .then(payload => payload.response.hits)
}

function retrieveLyrics(songId) {
    return fetch(`https://b00tc4mp.herokuapp.com/proxy?url=https://api.genius.com/songs/${songId}&text_format=html`, {
        headers: {
            Authorization: `Bearer ${GENIUS_TOKEN}`
        }
    })
        .then(res => res.json())
        .then(payload => payload.response.song)
}