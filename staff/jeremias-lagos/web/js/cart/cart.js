var socks = { type: 'socks', brand:'Tommy', qty: 10, price:20 }

var tshirt = { type: 't.shirt', brand:'Levis', qty:4, price:25 }

var shoes = { type: 'shoes', brand:'MK', qty: 2, price: 225 }

var cart = [ socks, tshirt, shoes ]

var total = 0

total = total + cart[0].price * cart[0].qty //200

total = total + cart[1].price * cart[1].qty //300

total = total + cart[2].price * cart[2].qty //450 = 750

total = 0

cart.length

cart

for (var i = 0; i < cart.length; i++) {

    total = total + cart [1].price * cart[i].qty
}
