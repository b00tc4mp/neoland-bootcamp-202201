function Person(name, gender) {
    this.name = name
    this.gender = gender
}

Person.prototype.salute = function(to) {
    return `${this.name}: Hello, ${to.name}!`
}

var peter = new Person('Peter', 'male')
var wendy = new Person('Wendy', 'female')
var campa = new Person('Campa', 'female')

console.log(peter.salute(wendy))
console.log(peter.salute(campa))

console.log(peter instanceof Array)
console.log(peter instanceof String)
console.log(peter instanceof Person)
console.log(peter instanceof Object)