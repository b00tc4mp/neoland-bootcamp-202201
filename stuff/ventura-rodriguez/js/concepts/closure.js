// function calc() {

//     var result

//     function sum (a, b) {
//         result = a + b
//     }

//     function showResult() {
//         console.log(result)
//     }

//     return {
//         sum,
//         showResult
//     }
    
// }


// function secret(_secret, _password) {

//     var secret = _secret

//     var password = _password


//     function showSecret(_password) {
//         if(password === _password)
//             return secret
//         else return 'a la puta calle'
//     }

//     return {
//         showSecret
//     }

// }


function secret(_secret, _password) {

    var secret = _secret

    var password = _password


    function showSecret(_password) {
        return password === _password ? secret : 'a la puta calle'
    }

    return {
        showSecret
    }

}


var lucatiel = secret('Dark Souls mola mucho', 'Gio deja de reírte de Dark Souls')

lucatiel.showSecret() // expected 'A la puta calle'

lucatiel.showSecret('Gio deja de reírte de Dark Souls')
// Expected 'Dark Souls mola mucho'

// TODO develop changeSecret