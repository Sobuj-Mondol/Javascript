
let names = ['Sobuj', 'Akash', 'Raju', 'Ruhul', 'Sakil', 'Sobuj', 'Suk', 'Robin','Akash', 'Raju', 'Sobuj'];
 


 function removeDuplicate(names){
    const unique = [];
    /*
     for(let i = 0; i < names.length; i++){
        const element = names[i];
        console.log(element);
    } 
    */
    for(const element of names){
       if(unique.indexOf(element) == -1){
           unique.push(element);
       }
   }
   return unique;
}
const reslut = removeDuplicate(names);
console.log(reslut);


// task 1:
let numbers = [10, 20, 30, 40, 50, 60, 10, 15, 30, 10, 20, 60, 70, 80, 90, 100];

function removeDuplicate(numbers){
    const unique = [];
    for(const element of numbers){
        if(unique.indexOf(numbers) == -1){
            unique.push(numbers);
        }
    }
    return unique;
}

const reslut = removeDuplicate(numbers);
console.log(reslut);

