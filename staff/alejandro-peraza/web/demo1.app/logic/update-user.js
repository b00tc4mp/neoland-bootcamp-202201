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