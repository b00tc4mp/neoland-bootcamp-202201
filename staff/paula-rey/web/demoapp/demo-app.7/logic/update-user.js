function updateUser(token, name, surname, email) {
    validateToken(token)
    validateName(name)
    validateSurname(surname)
    validateEmail(email)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ token, name, surname, username: email })
    })
        .then(res => {
            // const status = res.status
            const { status } = res

            if (status === 204) {

                return

            } else if (status >= 400 && status < 500) {
                
                // return res.json().then(({ error }) => {
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


/*  //function raw of res.json()//

     response.json().then(data => {
     // do something with your data //
     });
*/



/*   //function before of insomnia//

function updateUser(id, name, surname, email) {
    validateId(id)
    validateName(name)
    validateSurname(surname)
    validateEmail(email)

    const user = users.find(user => user.id === id)

    if (!user) throw Error('user not found')

    user.name = name
    user.surname = surname
    user.email = email
}
*/