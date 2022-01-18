debugger
var socks = { type: 'socks', brand: 'Tommy', qty: 10, price: 20 }
//undefined
var tshirt = { type: 't-shirt', brand: 'Levis', qty: 4, price: 25 }
//undefined
var shoes = { type: 'shoes', brand: 'MK', qty: 2, price: 225 }
//undefined
var cart = [socks, tshirt, shoes]
//undefined
var total = 0
//undefined
total = total + cart[0].price * cart[0].qty
//200
total = total + cart[1].price * cart[1].qty
//300
total = total + cart[2].price * cart[2].qty
//750
total = 0
//0
cart.length
//3
cart
//(3) [{…}, {…}, {…}]0: {type: 'socks', brand: 'Tommy', qty: 10, price: 20}1: {type: 't-shirt', brand: 'Levis', qty: 4, price: 25}brand: "Levis"price: 25qty: 4type: "t-shirt"[[Prototype]]: Object2: {type: 'shoes', brand: 'MK', qty: 2, price: 225}length: 3[[Prototype]]: Array(0)
for (var i = 0; i < cart.length; i++ /* i = i + 1 */) {
    total = total + cart[i].price * cart[i].qty
}
//750
