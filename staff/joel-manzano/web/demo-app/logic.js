function authenticateUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password)

    if (user) {
        return user.id
    }

    return null
}

function retrieveUser(id) {
    const user = users.find(user => user.id === id)

    if (user) {
        return user
    }

    return null
}

function registerUser(name, surname, email, password) {
    const user = new User(name, surname, email, password)

    users.push(user)
}

function updateUser(id, name, surname, email, password) {

}

function unregisterUser(id, password) {

}