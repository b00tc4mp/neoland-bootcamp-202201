function Person(name) {
    this.name = name
}

Person.prototype.salute = function(to) {
    return `${this.name}: Hello, ${to.name}!`
}


function Woman(name) {
    this.name = name
}

Woman.prototype = new Person()

Woman.prototype.giveBirth = function() {
    return '👶🏻'
}


function Man(name) {
    this.name = name
}

Man.prototype = new Person()

Man.prototype.giveSperm = function() {
    return '💦'
}


var wendy = new Woman('Wendy')
var peter = new Man('Peter')

console.log(peter.salute(wendy))
console.log(wendy.salute(peter))

console.log(peter instanceof Person) // true
console.log(peter instanceof Man) // true
console.log(peter instanceof Woman) // false

console.log(wendy instanceof Person) // true
console.log(wendy instanceof Man) // false
console.log(wendy instanceof Woman) // true