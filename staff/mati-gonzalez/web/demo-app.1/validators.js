function validateEmail(email) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (email === '') throw new Error('empty email')
    if (BLANK_REGEX.test(email)) throw new Error('blank email')
    if (!EMAIL_REGEX.test(email)) throw new Error('invalid email')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (BLANK_REGEX.test(password)) throw new Error('blank password')
    if (SPACE_REGEX.test(password)) throw new Error('password has empty spaces')
    if (password === '') throw new Error('empty password')
}

function validateName(name) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (name === '') throw new Error('empty name')
    if (BLANK_REGEX.test(name)) throw new Error('blank name')
    if (SPACES_AROUND_REGEX.test(name)) throw new Error('name has spaces around')
}

function validateSurname(surname) {
    if (typeof surname !== 'string') throw new Error('surname is not a string')
    if (surname === '') throw new Error('empty surname')
    if (BLANK_REGEX.test(surname)) throw new Error('blank surname')
    if (SPACES_AROUND_REGEX.test(surname)) throw new Error('surname has spaces around')
}
 function validateId(id) {
     if (typeof id !== 'string') throw new Error('id is not a string')
     if (id === '') throw new Error('empty id')
     if (SPACE_REGEX.test(id)) throw new Error('id has blank spaces')
 }