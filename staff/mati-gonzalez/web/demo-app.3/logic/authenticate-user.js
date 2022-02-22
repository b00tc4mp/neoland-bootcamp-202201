function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = users.find(user => user.email === email && user.password === password) 

    if (user) {
        return user.id
    }

    throw new Error('wrong credentials')
}