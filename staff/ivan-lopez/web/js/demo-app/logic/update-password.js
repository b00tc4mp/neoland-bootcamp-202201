function updateUserPassword(token, currPassword, password, rePassword) {
    validateToken(token)
    validatePassword(currPassword)
    validatePassword(password)
    validatePassword(rePassword)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        // MODIFY, DATA 
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ currPassword, password, rePassword })
})

            .then(res => {
                const { status } = res

                if (status === 204) {
                    // DONE manage happy path
                    return
                } else if (status >= 400 && status < 500) {
                    // DONE manage client error
                    return res.json()
                        .then(payload => {
                            const { error } = payload
    
                            throw new Error(error)
                        })
                } else if (status >= 500) {
                    // DONE manage server error
                    throw new Error('server error')
                } else {
                    throw new Error('unknown error')
                }
            })
} 


