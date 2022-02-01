let first = 7;
let second = 5;
console.log(first,second);
// // first approach
let temp = first;
first = second;
second = temp;
console.log(first,second);


// destructuring
[first,second] = [second,first];
console.log(first,second);