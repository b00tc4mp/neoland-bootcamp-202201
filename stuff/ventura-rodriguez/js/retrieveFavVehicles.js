const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const BLANK_REGEX = /^\s+$/
const SPACE_REGEX = /\s/
const SPACES_AROUND_REGEX = /^\s[aA-zZ]\s?[aA-zZ]|[aA-zZ]\s?[aA-zZ]\s$/

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')

    const parts = token.split('.')

    if (parts.length !== 3) throw new Error('token it not valid')

    parts.forEach(part => {
        if (part === '') throw new Error('token part is empty')
        if (BLANK_REGEX.test(part)) throw new Error('token part is blank')
    })
}


function retrieveFavVehicles(token) {
    validateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        
        const { status } = res

        if (status >= 400 && status < 500) {

            return res.json()
            .then(({ error }) => { throw new Error(error) })
            
        }
        else if (status >= 500) throw new Error('server error')
            
        else if (!status === 200) throw new Error('unknown error')
        
        else if (status === 200) return res.json()
    })
    .then(user => {
                
        const { favs = [] } = user

        if (!favs.length) return []

        return new Promise((resolve, reject) => {
                    
            const vehicles = []

            let count = 0

            favs.forEach((vehicleId, index) => {
                        
                return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`)
                .then(res => {
                            
                    const { status } = res
                    
                    if (status >= 400 && status < 500) {
                                
                        return res.json()
                        .then(({ error }) => { reject(new Error(error)) })
                                
                    }
                    else if (status >= 500) reject(new Error('server error'))
                                
                    else if (!status === 200) reject(new Error('unknown error'))
                            
                    else if (status === 200) return res.json()
                })
                .then(vehicle => {

                    vehicle.isFav = true

                    vehicles[index] = vehicle

                    count++

                    if (count === favs.length) resolve(vehicles)
                })
            })
        })
    })
}

retrieveFavVehicles(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjAwZGZmMmFhMTFlYzAwMTcwNGM1YWUiLCJpYXQiOjE2NDUwMjQ0NDksImV4cCI6MTY0NTAyODA0OX0.j6viTIUU3HlNbiCSi3iOZsHMKiLnlQTAo91O3-8dex4'
)
.then(console.log)