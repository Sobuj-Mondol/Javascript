function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);


var mamaInches = 140;
var feet = inchToFeet(mamaInches);
console.log('mamaInches in feet', feet);


var mamiInches = 160;
var feet = inchToFeet(mamiInches);
console.log('mamiInches in feet', feet);


var daduInches = 170;
var feet = inchToFeet(daduInches);
console.log('daduInches in feet', feet);


// mile to km
function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km: ', marathin);