// Calculate total price from cart items
const cart = [
  { name: 'Shirt', price: 20, quantity: 2 },
  { name: 'Pants', price: 30, quantity: 1 },
  { name: 'Shoes', price: 50, quantity: 1 }
];
// Expected output: 120 (20*2 + 30*1 + 50*1)

let total = cart.reduce( (acc, itr) => acc += itr.price*itr.quantity, 0);

// for(const item of cart){
//     total += item.price * item.quantity;
// }

console.log(total);