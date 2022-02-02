const greeting = 'Hello, How are you ?';

function reverseString(text){
    let revers = '';
    for(let letter of text){
        console.log(letter);
        revers = revers + letter;
    }
}

reverseString(greeting);