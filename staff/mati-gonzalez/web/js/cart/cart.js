debugger
var socks = { type : 'socks', brand: 'Tommy', qty: 10, price: 20}
//undefined

var tshirts = {type: 't-shirts', brand: 'Helmut Lang', qty: 2, price: 125}
//undefined

var pants = {type: 'pants', brand: 'Palm Angels', qty: 2, price: 117}
//undefined

var shoes = {type: 'shoes', brand: 'Zadig&Volatire', qty: 1, price: 275}
//undefined

var jacket = {type: 'jacket', brand: 'YSL', qty: 1, price: 7500}
//undefined

var hats = {type:'hats', brand: 'Celine', qty: 2, price: 271}

var cart = [socks, tshirts, pants, shoes, jacket, hats]
//undefined

total = 0
//undefined

for ( var i = 0; i < cart.length; i++)
    total = total + cart[i].qty * cart[i].price

for ( var p = 0 ; p < cart.length; p++){
    total = total + cart[p].qty * cart[p].price * .9
}

console.log(cart)