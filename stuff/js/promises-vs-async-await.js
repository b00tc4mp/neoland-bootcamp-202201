/*
function searchVehicles(query) {
    if (typeof query !== 'string') throw new TypeError('query is not a string')
    if (query.trim().length === 0) throw new Error('query is empty or blank')
    
    return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)
        .then(res => {
            const { status } = res

            if (status >= 500) {
                throw new Error('server Error')
            } else if (status >= 400) {
                throw new Error('client Error')
            } else if (status === 200) {
                return res.json()
            }
        })
}
*/

function searchVehicles(query) {
    if (typeof query !== 'string') throw new TypeError('query is not a string')
    if (query.trim().length === 0) throw new Error('query is empty or blank')
    
    return (async () => {
        const res = await fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)

        const { status } = res

        if (status >= 500) {
            throw new Error('server Error')
        } else if (status >= 400) {
            throw new Error('client Error')
        } else if (status === 200) {
            const vehicles = await res.json()

            return vehicles
        }
    })() // Immediately Invoked Function Expression (IIFE)
}

/*
try {
    searchVehicles('mario')
        .then(vehicles => console.log(vehicles))
        .catch(error => console.error(error.message))
} catch(error) {
    console.error(error.message)
}
*/

(async () => {
    try {
        const vehicles = await searchVehicles('mario')
    
        console.log(vehicles)
    } catch(error) {
        console.error(error.message)
    }
})()