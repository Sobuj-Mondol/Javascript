const number = [10, 20, 30, 40, 50];

let sum = 0;
for( let i = 0; i <= number.length; i++){
    const element = number[i];
    sum = sum + element;
    // console.log(sum);
}


// function something wrong

function arrayTotal(number){
    let sum = 0;
    for(let i = 0; i <= number.length; i++){
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const reslut = arrayTotal(20, 40, 60,);
console.log(reslut);
