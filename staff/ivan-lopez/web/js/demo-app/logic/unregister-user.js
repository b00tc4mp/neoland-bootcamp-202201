function unregisterUser(token, password) {
    validateToken(token)
    validatePassword(password)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        // DELETE, DATA
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ password })
})
.then(res => {

    const { status } = res

    // // happy path
    if(status === 204) return // undefined

    else if (status >= 400 && status < 500) {

        // return JSON.parse(res.body)

            return res.json()
            .then(({ error }) => { // payload*, body, error
        
                throw new Error(error) // Error tiene una propiedad message})
      
            })
    }
        else if (status >= 500) throw new Error('server error')

        else throw new Error('unknown error')


    })
}

// No devuelve body
// Si todo sale bien devuelve un 204
// Si hay un 4xx es un error de cliente (client error)
// Si hay un 5xx es un erorr de sistema (server error)

// Synchronous code: validate params,
// Asynchronous code: fetch
// Asynchronous code: capture HTTP response
// Asynchronous code: manage errors