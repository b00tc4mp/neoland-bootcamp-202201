function updateUserPassword(token, currPassword, password, rePassword) {
    validateToken(token)
    validatePassword(currPassword)
    validatePassword(password)
    validatePassword(rePassword)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        // Modify, data
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ currPassword, password, rePassword })
    })
    .then(res => {

        const { status } = res

        if (status === 204) return 

        else if (status >= 400)

    })

   
}