function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password })
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                return res.json()
                    .then(payload => {
                        const { token } = payload

                        return token
                    })
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