// variable
var time = '10:30pm';
var number = 100;
var myNameBolod = false;

// array
var number = [10, 20, 30, 40, 50];
var elementCount = number.length;
var Index = number.indexOf(30);
number.push(70);
number.pop(20);

// conditional
if(bookPrice < 130){
    console.log('I will buy this book');
}
else{
    console.log('please!somthing discount this book');
}

// loop
var i = 0;
while(i <= 17){
    //do some work
    i++;
}

// for loop
for(var i = 0; i <= 17; i++){
    console.log();
}

// function
function isMoonUp(time){
    if(time >= 19 && time <= 5){
        return true;
    }
    return false;
}

// function call
var time = isMoonUp(21);

// let const

// value of variable could change
var price = 25;
price = 30;
price = 10;

// value of the variable will not change
const name = 'Sobuj';
console.log(name);