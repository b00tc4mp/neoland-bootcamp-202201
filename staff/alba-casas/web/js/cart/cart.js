var socks = { type: "socks", brand: "Tommy", amount: "10", price: 20 };

var tshirt = { type: "tshirt", brand: "Levis", amount: "4", price: 25 };

var shoes = { type: "shoes", brand: "MK", amount: "2", price: 225 };

var cart = [socks, tshirt, shoes];

/* console.log(cart[2].price); */

let total = 0;

total = total + cart[0].price * cart[0].amount;

total = total + cart[1].price * cart[1].amount;

total = total + cart[2].price * cart[2].amount;

total = 0;

var str = "string";

/* console.log(str[4]); */

for (var i = 0; i < cart.length; i++) /* i = i + 1 */ {
  /* total = total + cart[i].price * cart[i].amount; */
}

console.log(total);
