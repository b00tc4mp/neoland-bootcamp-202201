const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const BLANK_REGEX = /^\s+$/
const SPACE_REGEX = /\s/
const SPACES_AROUND_REGEX = /^\s[aA-zZ]\s?[aA-zZ]|[aA-zZ]\s?[aA-zZ]\s$/

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

    return null
}

function registerUser(name, surname, email, password) {
    validateName(name)
    validateSurname(surname)
    validateEmail(email)
    validatePassword(password)

    
    let user = users.find(user => user.email === email)

    if (user) throw new Error('user already exist')

    user = new User(name, surname, email, password)
    
    user.push(user)
}

function updateUser(id, name, surname, email) {
    validateId(id)
    validateName(Name)
    validateSurname(surname)
    validateEmail(email)
    
    
    const user = user.find(user => user.id === id)

    if (!user) throw Error('user not found')
    
    if (user.password !== currPassword) throw new Error('wrong credentials')
    
    if (password !== rePassword) throw new Error('password and password retyped do not match')
    
    user.password = password

}

function upregisterUser(id, password) {
    validateId(id)
    validatePassword(password)    
}           