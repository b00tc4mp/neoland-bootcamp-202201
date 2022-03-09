

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = users.find(user => user.email === email && user.password === password)

    if (user) {
        return user.id
    }

    throw new Error('wrong credentials')
}

function retrieveUser(id) {
    validateId(id)

    const user = users.find(user => user.id === id)

    if (user) {
        return user
    }

    throw new Error('User not found')
}

function registerUser(name, surname, email, password) {
    validateName(name)
    validateSurname(surname)
    validateEmail(email)
    validatePassword(password)

    let user = users.find(user => user.email === email)

    if (user) throw new Error('user already exists')

    user = new User(name, surname, email, password)

    users.push(user)
}

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

function updateUserPassword(id, currPassword, password, rePassword) {
    validateId(id)
    validatePassword(currPassword)
    validatePassword(password)
    validatePassword(rePassword)

    const user = users.find(user => user.id === id)

    if (!user) throw Error('user not found')

    if (user.password !== currPassword) throw new Error('wrong credentials')

    if (password !== rePassword) throw new Error('password and password retyped do not match')

    user.password = password
}

function unregisterUser(id, password) {
    validateId(id)
    validatePassword(password)

    const user = users.find(user => user.id === id)

    if(user) {
        if(user.password === password){
            const index = users.indexOf(user)

        users.splice(index, 1) 
        return
    }

     throw new Error ('wrong credentials')
    
    }  
    
    throw new Error ('User not found')

}

