/* demo 0 */

var a = 1

function fun() {
    a = 2
    
    console.log(a)
}

fun()

console.log(a)
//2
//2

/* demo 1 */

var a = 1

function fun() { // shadowning
    var a = 2
    
    console.log(a)
}

fun()

console.log(a)
//2
//1

/* demo 2 */

var a = 1

function fun(a) { // shadowing
    console.log(a)
}

fun()

console.log(a)
//undefined
//1

/* demo 3 */

var a = 1

function fun() { // shadowing
    var a
    
    console.log(a)
}

fun()

console.log(a)
//undefined
//1