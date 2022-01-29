var i = 0;
while(i <= 15){
    console.log(i);
    i++;
}

// Brack
while(i <= 15){
    console.log(i);
    if(i==10){
        break;
    }
    i++;
}

// for loop
for(var i = 0; i <= 15; i++) {
    console.log(i);
    if(i == 7){
        break;
    } 
}

// array
var numbers = [10, 20, 30, 40, 50];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    if( number < 40){
        break;
    }
}
    

for (var i = 0; i < Numbers.length; i++){
    var number = numbers[i];
    if(number > 40){
        continue;
    }
    console.log(number);
}