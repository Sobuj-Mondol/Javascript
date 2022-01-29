function bookPrice(money){
    console.log('this is', money);
}
bookPrice(100);


function bookPrice(money){
    console.log('this is', money);
    console.log('please give me a book.');
}
var money = 200;
bookPrice(money);


function bookPrice(money){
    console.log('this is', money);
    console.log('please give me a book.');
    var bookPrice = 40;
    var bookQuantity = money / bookPrice;
    return bookQuantity;
}
var money = 200;
var book = bookPrice(money);
console.log('please take your book', book);