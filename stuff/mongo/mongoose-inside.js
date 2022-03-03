class ObjectId {
    constructor(stringId) {
        this.stringId = stringId
    }

    toString() {
        return this.stringId
    }
}

class Model {
    constructor(document) {
        const stringId = Math.random().toString(36).substring(2)

        document._id = new ObjectId(stringId)

        this._doc = document
    }

    get id() {
        return this._doc._id.toString()
    }
}

class User extends Model {
    constructor(document) {
        super(document)
    }

    get name() {
        return this._doc.name
    }

    set name(name) {
        this._doc.name = name
    }

    get email() {
        return this._doc.email
    }

    set email(email) {
        this._doc.email = email
    }

    get password() {
        return this._doc.password
    }

    set password(password) {
        this._doc.password = password
    }
}

class Note extends Model {
    constructor(document) {
        super(document)
    }

    get user() {
        return this._doc.user
    }

    set user(user) {
        this._doc.user = user
    }

    get text() {
        return this._doc.text
    }

    set text(text) {
        this._doc.text = text
    }

    get color() {
        return this._doc.color
    }

    set color(color) {
        this._doc.color = color
    }
}

const user = new User({ name: 'Peter Pan', email: 'peterpan@mail.com', password: '123123123' })

const note = new Note({ user, text: 'hello world', color: 'yellow' })

console.log(user.name)
console.log(user._doc.name)
user.name = 'Pedro Pan'
console.log(user.name)
console.log(user._doc.name)

console.log(note.text)
console.log(note._doc.text)
note.text = 'hola mundo'
console.log(note.text)
console.log(note._doc.text)
