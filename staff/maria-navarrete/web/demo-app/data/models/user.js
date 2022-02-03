let userCount = 0

class User{
    constructor(name, email, password){
        userCount++
        this.id = `${userCount}`
        this.name = name
        this.email = email
        this.password = password
    }
}