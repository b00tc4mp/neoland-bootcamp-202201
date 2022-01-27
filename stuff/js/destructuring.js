// demo 1

var patient = {
    name: 'Peter',
    surname: 'Pan',
    age: 33
}

//var name = patient.name
//var surname = patient.surname
//var age = patient.age

var { name, surname, age } = patient // destructuring

console.log(name, surname, age)
// Peter Pan 33

// demo 2 

var patient = {
    name: 'Peter',
    surname: 'Pan',
    age: 33
}

var { name, surname, age: AGE } = patient // destructuring with "renaming"

console.log(name, surname, AGE)
// Peter Pan 33

// demo 2.5

var patient = {
    name: 'Peter',
    surname: 'Pan',
    age: 33,
    gender: 'male'
}

var { name, surname, age, gender = 'female' } = patient

console.log(name, surname, age, gender)
// Peter Pan 33 male

// demo 2.75

var patient = {
    name: 'Peter',
    surname: 'Pan',
    age: 33,
    //gender: 'male'
}

var { name, surname, age, gender = 'female' } = patient

console.log(name, surname, age, gender)
// Peter Pan 33 female

// demo 3

var v = [100, 200, 300]

var x = v[0]
var y = v[1]
var z = v[2]

//var [x, y, z] = v

console.log(x, y, z)
// 100 200 300

// demo 4

var a = [100, 200, 300, 400, 500]

var [, y, z, , w] = a

console.log(y, z, w)
// 200 300 500

// demo 5

var a = [100, 200, 300, 400]

var [, y, z, , w = 1000] = a

console.log(y, z, w)
// 200 300 1000

// demo 6

var a = [100, 200, 300, 400, 500]

var [, y, z, , w = 1000] = a

console.log(y, z, w)
// 200 300 500