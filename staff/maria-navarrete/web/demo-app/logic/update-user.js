function updateUser(id, name, email) {

    validateId(id)
    validateName(name)
    validateEmail(email)

    const user = users.find(user => user.id === id)

    if(!user) throw new Error ('user not found')

    user.name = name
    user.email = email
}