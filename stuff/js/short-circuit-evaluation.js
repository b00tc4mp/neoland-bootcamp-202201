// if-else

// demo 1

n = 1

a = n  && 'hello world' || 'hola mundo'

console.log(a)
// hello world

// demo 2

n = 0

a = n  && 'hello world' || 'hola mundo' 
// ~ a = n x 'hello world' + 'hola mundo'

console.log(a)
// hola mundo

// if-else-if...

// 0 -> es
// 1 -> en
// 2 -> ca
// 3 -> it

var n = undefined
var a = undefined

n = 4

a = (n === 0) && 'hola mundo' || (n === 1)  && 'hello world' || (n === 2) && 'hola mon' || (n === 3) && 'ciao mondo' || 'privet mir'
// ~ a = (n === 0) x 'hola mundo' + (n === 1) x 'hello world' + (n === 2) x 'hola mon' + (n === 3) x 'ciao mondo' + 'privet mir'

/*
if (n === 0)
    a = 'hola mundo'
else if (n === 1)
    a = 'hello world'
else if (n === 2)
    a = 'hola mon'
else if (n === 3)
    a = 'ciao mondo'
else
    a = 'privet mir'
/**/

console.log(a)