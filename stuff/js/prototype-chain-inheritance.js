/**
 * Abstraction of a Person
 * 
 * @param {string} name The person name.
 */
function Person(name) {
    this.name = name
}

Person.prototype.salute = function (to) {
    return `${this.name}: Hello, ${to.name}!`
}

/**
 * Abstraction of a Woman
 * 
 * @param {string} name The woman name.
 */
function Woman(name) {
    //this.name = name
    Person.call(this, name)
}

//Woman.prototype = new Person()
Woman.prototype = Object.create(Person.prototype)
Woman.prototype.constructor = Woman

Woman.prototype.giveBirth = function (expression) {
    return `${this.name}: ${expression} 👶🏻`
}

Woman.prototype.doMulti = function(tasks) {
    return `${this.name}: ${tasks.join(', ')}`
}

/**
 * Abstraction of Man.
 * 
 * @param {string} name The name of the man.
 */
function Man(name) {
    //this.name = name
    Person.call(this, name)
}

// Man.prototype = new Person()
Man.prototype = Object.create(Person.prototype)
Man.prototype.constructor = Man

Man.prototype.giveSperm = function (expression) {
    return `${this.name}: ${expression} 💦`
}

Man.prototype.doNothing = function () {
    return `${this.name}: ...`
}

var wendy = new Woman('Wendy')
var peter = new Man('Peter')

console.log(peter.salute(wendy))
console.log(wendy.salute(peter))

console.log(peter.giveSperm('✨🤪 ...'))
console.log(wendy.giveBirth('💨 💨 💨 💨 ...'))

console.log(wendy.doMulti(['work', 'study', 'attend 👶🏻', 'call parents', 'do sports', 'party']))
console.log(peter.doNothing())

console.log(peter instanceof Object) // true
console.log(peter instanceof Person) // true
console.log(peter instanceof Man) // true
console.log(peter instanceof Woman) // false

console.log(wendy instanceof Object) // true
console.log(wendy instanceof Person) // true
console.log(wendy instanceof Woman) // true
console.log(wendy instanceof Man) // false

var mati = new Man('Maty')
var mPau = new Woman('María Paula')
var gio = new Man('Giovanni')
var pau = new Woman('Paula')
var alba = new Woman('Alba')
var jud = new Woman('Judith')
var alex = new Man('Alejandro')
var joe = new Man('Joel')
var jere = new Man('Jeremías')
var ivan = new Man('Iván')
var ventu = new Man('Ventu')
var manu = new Man('Manuel')

var students = [mati, mPau, gio, pau, alba, jud, alex, joe, jere, ivan, ventu, manu]

var womenCount = students.reduce((accum, student) => {
    if (student instanceof Woman)
        return accum + 1

    return accum
}, 0)

console.log(womenCount)

var menCount = students.reduce((accum, student) => {
    if (student instanceof Man)
        return accum + 1

    return accum
}, 0)

console.log(menCount)