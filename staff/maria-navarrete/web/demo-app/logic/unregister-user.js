function unregisterUser(id, password) {
    validateId(id)
    validatePassword(password)
    let index

    const user = users.find(user, _index => {
        index=_index
        return user.id === id && user.password === password})

    if (!user) throw new Error ('wrong credentials')
    
    users.splice(index, 1)
}