const business = 450;
const minister = 500;
const army = 550;
if(business > minister && business > army){
    console.log('business man is bigger');
}
else if(minister > business && minister > army){
    console.log('minister is a bigger');
}
else{
    console.log('Army is bigger');
}
//
function findLargest(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}
const reslut = findLargest(10,20);
console.log('reslut is',reslut);
//

// task 1:
function findLargest(first, second, therd){
    if(first > second && first > therd){
        return first;
    }
    else if(second > first && second > therd){
        return second;
    }
    else{
        return therd;
    }
}

const reslut = findLargest(10, 20, 30);
console.log('largest is: ',reslut);
//
// task 2:
function findLargest(first, second, therd){
    if(first < second && first < therd){
        return first;
    }
    else if(second < first && second < therd){
        return second;
    }
    else{
        return therd;
    }
}

const reslut = findLargest(10, 20, 30);
console.log('smallest is: ',reslut);

//
let max = Math.max(business, minister, army);
console.log('largest is',max);