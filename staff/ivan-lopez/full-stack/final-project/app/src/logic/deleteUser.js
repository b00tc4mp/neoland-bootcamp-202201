import { validators } from 'commons'

const { validateToken, validatePassword } = validators

function deleteUser(token, password) {
    validateToken(token)
    validatePassword(password)

    return fetch('http://localhost:8080/api/users', {

        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ password })
    })
        .then(res => {

            const { status } = res
            if (status === 204) return
            else if (status >= 400 && status < 500) {

                return res.json()
                    .then(({ error }) => { 
                        throw new Error(error)
                    })
            }
            else if (status >= 500) throw new Error('server error')

            else throw new Error('unknown error')


        })
}

export default deleteUser