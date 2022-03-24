const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const BLANK_REGEX = /^\s+$/
const SPACE_REGEX = /\s/
const SPACES_AROUND_REGEX = /^\s[aA-zZ]\s?[aA-zZ]|[aA-zZ]\s?[aA-zZ]\s$/


function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email === '') throw new Error('empty email')
    if (BLANK_REGEX.test(email)) throw new Error('blank email')
    if (!EMAIL_REGEX.test(email)) throw new Error('invalid email')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (BLANK_REGEX.test(password)) throw new Error('blank password')
    if (SPACE_REGEX.test(password)) throw new Error('password has empty spaces')
    if (password === '') throw new Error('empty password')
    if (password.length < 8) throw new Error('password is shorter than 8 characters')
}

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (name === '') throw new Error('empty name')
    if (BLANK_REGEX.test(name)) throw new Error('blank name')
    if (SPACES_AROUND_REGEX.test(name)) throw new Error('name has spaces around')
}

function validateSurname(surname) {
    if (typeof surname !== 'string') throw new TypeError('surname is not a string')
    if (surname === '') throw new Error('empty surname')
    if (BLANK_REGEX.test(surname)) throw new Error('blank surname')
    if (SPACES_AROUND_REGEX.test(surname)) throw new Error('surname has space around')
}

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')

    const parts = token.split('.')

    if (parts.length !== 3) throw new Error('token is not valid')

    parts.forEach(part => {
        if (part === '') throw new Error('token part is empty')
        if (BLANK_REGEX.test(part)) throw new Error('token part is blank')
    })
}