
 let products = [
    {Name: 'laptop', price:40000,},
    {Name: 'shirt', price:500,},
    {Name: 'phone', price:20000,},
    {Name: 'watch', price:1000,}
 ];


 let product = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice); 


let cart = [
    {Name: 'laptop', price:40000, quantity: 1},
    {Name: 'shirt', price:500, quantity: 3},
    {Name: 'phone', price:20000, quantity: 1},
    {Name: 'watch', price:1000, quantity: 3}
];

let cartTotal = 0;
for(const product of cart){
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);