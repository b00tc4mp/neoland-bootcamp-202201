








function unregisterUser(id, password) {
    validateId(id)
    validatePassword(password)

    const user = users.find(user => user.id === id)

    if (user) {
        if (user.password === password) {
            const index = users.indexOf(user)

            users.splice(index, 1)

            return
        }

        throw new Error('wrong credentials')
    }

    throw new Error('user not found')
}