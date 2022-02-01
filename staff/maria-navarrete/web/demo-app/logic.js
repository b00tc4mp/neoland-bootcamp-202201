function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = users.find(user => user.email === email && user.password === password)
    if (user)
        return user.id

    throw new Error('wrong credentials')
}

function retrieveUser(id) {
    validateId(id)

    const user = users.find(user => user.id === id)

    if (user)
        return user

    throw new Error('wrong id')
}

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    let user = users.find(user => user.email === email)

    if (user) throw new Error('user already exists')
    
    user = new User(name, email, password)
    users.push(user)
}

function updateUser(id, name, email) {

    validateId(id)
    validateName(name)
    validateEmail(email)

    const user = users.find(user => user.id === id)

    if(!user) throw new Error ('user not found')

    user.name = name
    user.email = email
}

function updateUserPassword(id, currPassword, password, rePassword){
    validateId(id)
    validatePassword(currPassword)
    validatePassword(password)
    validatePassword(rePassword)

    const user = users.find(user => user.id === id)

    if(!user) throw new Error ('user not found')

    if(user.password !== currPassword) throw new Error ('wrong credentials')

    if(password !== rePassword) throw new Error('password and confirmation do not match')

    user.password = password
}

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