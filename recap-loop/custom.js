var tableColor = yellow;
var bookitems = 10;
var isFull = false;

// array
var items = ['not', 'pen', 'book', 'pencil'];
items.indexOf('book');  // 2
items.indexOf('boll'); // -1
items.push('rabar');
items.pop();


//conditional
if(items.length >= 4){
    console.log('you have too many stuff on your desk.');
}
else if{
    console.log('you only have one hali item.');
}
else{
    console.log('wow! you have clean desk.');
}