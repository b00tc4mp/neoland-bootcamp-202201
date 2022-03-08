function updateUser(token, name, email) {

    validateToken(token)
    validateName(name)
    validateEmail(email)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username: email })

    })
        .then(res => {
            const { status } = res
            if (status === 204) {
                //happy path
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