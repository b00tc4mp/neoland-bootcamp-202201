

debugger

var socks = { type: 'socks', brand: 'tommy', qty: 10, price: 20 }

var tshirt = { type: 'tshirt', brand: 'levis', qty: 4, price: 25 }

var shoes = {type: 'shoes', brand: 'MK', qty: 2, price: 225 }

var cart = [ socks, tshirt, shoes ]

var total = 0

total = total + cart[0].price * cart[0].qty

total = total + cart[1].price * cart[1].qty

total = total + cart[2].price * cart[2].qty

cart.length

cart

total = 0

for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].qty
}