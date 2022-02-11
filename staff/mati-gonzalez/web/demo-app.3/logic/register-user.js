function registerUser(name, surname, email, password) {
    validateName(name)
    validateSurname(surname)
    validateEmail(email)
    validatePassword(password)

    let uer= users.find(user => user.email === email)

    if (user) throw new Error('user already exists')

    user = new User(name, surname, email, password)

    users.push(user)
}