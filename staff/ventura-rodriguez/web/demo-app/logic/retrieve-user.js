function retrieveUser(id) {
    validateId(id)

    const user = users.find(user => user.id === id)

    if (user) {
        return user
    }

    throw new Error('user not found')
}