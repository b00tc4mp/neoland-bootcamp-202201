// WTF integers!

var num = '-0.1'

console.log(parseInt(num))

console.log(Math.floor(Number(num)))

console.log(Math.trunc(num))

// -0
// -1
// -0

0 === -0
true