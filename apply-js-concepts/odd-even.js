const number = 150;
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 121;
const isMyNumberEven = isEven(myNumber);


const herNumber = 182;
const isHerNumberEven = isEven(herNumber);

// is odd number
function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
} 

const isMyNumberOdd = isOdd(myNumber);
console.log('is my number add', myNumberOdd);
