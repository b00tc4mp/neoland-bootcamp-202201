let userCount = 0

function User(name, surname, email, password) {
    userCount++

    this.id = `${userCount}`
    this.name = name
    this.surname = surname
    this.email = email
    this.password = password
}

const Pepito = new User('Pepito', 'Grillito', 'pepithegri@llo.com', '123123')
const users = [Pepito]