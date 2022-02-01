function largestElement(number){
    let largest = number[0];
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(element > largest){
            largest = element;
        }
    } 
    return largest;
}
const ages = [10, 20, 30, 40, 100, 75, 15, 150, 5, 1, 50];
const oldest = largestElement(ages);
const oldest2 = largestElement([-10, -12, -2, -20]);

console.log(oldest2);


