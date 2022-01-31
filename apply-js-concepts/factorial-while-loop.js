function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(7);
console.log(myFactorial);



// while loop
function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myFactorial = getFactorial(7);
console.log(myFactorial);



// for loop reverse
function getFactorial2(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getFactorial2(7);
console.log(myFactorial);