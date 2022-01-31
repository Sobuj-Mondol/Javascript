function leapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

// leapYear(2025);

const myYear = 2024;
const isMyYearLeapYear = leapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);




function leapYear(year){
    if(years/400){
        result = true
    }
    else if(years/100){
        result = false
    }
    else if(years/4){
        result = true
    }
    else{
        result = false
    }
    return result
}