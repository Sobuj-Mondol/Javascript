// let factorial = 1;
// for (let i = 1; i <= 10; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

// function

function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var firstFactorial = getFactorial(7);
console.log(firstFactorial);

var secondFactorial = getFactorial(10);
console.log(secondFactorial);