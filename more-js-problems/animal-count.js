function animalCount(miles){
    let animalDensityFirstTenMiles = 10;
    let animalDensitySecondTenMiles = 50;
    let animalDensityRestMiles = 100;
    if(miles <= 10){
        let count = miles * animalDensityFirstTenMiles;
        return count;
    }
    else if(miles <= 20){
        let firstDenseAnimals = 10 * animalDensityFirstTenMiles;
        let restMiles = miles - 10;
        let secondDenseAnimals = restMiles * animalDensitySecondTenMiles;
        let totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else{
        let firstDenseAnimals = 10* animalDensityFirstTenMiles;
        let secondDenseAnimals = 10* animalDensitySecondTenMiles;
        let restMiles = miles -20;
        let restDensAnimals = restMiles * animalDensityRestMiles;
        let totalAnimals = firstDenseAnimals + secondDenseAnimals + restDensAnimals;
        return totalAnimals;
    }
}
let reslut = animalCount(35);
console.log(reslut);