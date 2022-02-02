function largestElement(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > max){
            max = element;
        }
    }
}
/* const reslut = largestElement(10);
console.log(reslut); */

//
function smallElement(numbers){
    let min = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < min){
            min = element;
        }
    }
}
const reslut = smallElement(10);
console.log(reslut);
