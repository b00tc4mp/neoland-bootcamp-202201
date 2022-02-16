// salutators demo

function salutator(from) {
    return function(salutation, to) {
        return `${from}: ${salutation}, ${to}!`
    }
}

var mati = salutator('Mati')
var gio = salutator('Gio')

console.log(mati('hello', 'Pau'))
console.log(mati('bye', 'Gio'))
console.log(gio('bye', 'Alba'))
console.log(gio('hola', 'Judith'))

// secret box demo

function box(password) {
    var _password = password
    var _secret
    
    return {
        changePassword(currPassword, newPassword, confirmPassword) {
            if (currPassword !== _password) throw new Error('wrong password')

            if (newPassword !== confirmPassword) throw new Error('new password and confirm password do not match')

            _password = newPassword
        },

        keepSecret(secret, password) {
            if (password !== _password) throw new Error('wrong password')

            _secret = secret
        },

        recoverSecret(password) {
            if (password !== _password) throw new Error('wrong password')

            return _secret
        }
    }
}

var box1 = box('123123123')
var box2 = box('234234234')

box1.keepSecret('el padre de mi abuela tenia una doble vida', '123123123')
console.log(box1.recoverSecret('123123123'))

box2.keepSecret('me estoy quedando calvo', '234234234')

box1.changePassword('123123123', '234234234', '234234234')
console.log(box1.recoverSecret('234234234'))

console.log(box2.recoverSecret('234234234'))