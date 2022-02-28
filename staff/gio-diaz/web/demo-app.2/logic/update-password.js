function undatePassword (id, currPassword, password, rePassword) {
    validateId(id)
    validatePassword(currPassword)
    validatePassword(password)
    validatePassword(rePassword)

    const user = users.find(user => user.id === id)

    if (!user) throw Error ('user not found')

    if (user.password !== currPassword) throw new Error ('wrong credentials')

    if (password !== rePassqord) throw new error ('password and password repyted do not match')

    user. password = password
}