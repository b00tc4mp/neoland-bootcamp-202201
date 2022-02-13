import {validateToken, validatePassword} from './helpers/validators'

function updateUserPassword(token, currPassword, password, rePassword) {
    validateToken(token)
    validatePassword(currPassword)
    validatePassword(password)
    validatePassword(rePassword)

    if (password !== rePassword) throw new Error('retyped password doesn\'t match password') 

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        //MODIFY, PASSWORD
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ oldPassword: currPassword, password }) 
    })
        .then(res => {
            // const status = res.status
            const {status} = res

            if (status === 204) return
            
            else if (status >= 400 && status < 500) {
                
                return res.json()
                    .then(({error}) => {

                        throw new Error(error)

                    })
            } else if ( status >= 500) {
                
                throw new Error('server error')

            } else {
                throw new Error('unknown error')
            }
        })
}

export default updateUserPassword
