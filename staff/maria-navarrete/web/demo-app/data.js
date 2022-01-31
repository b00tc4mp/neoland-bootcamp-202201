let userCount = 0

class User{
    constructor(name, surname, email, password){
        userCount++
        this.id = userCount
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
    }
}
const pepito = new User ('Pepito', 'Grillo', 'pepito@mail.com', '12345')
const users=[pepito]