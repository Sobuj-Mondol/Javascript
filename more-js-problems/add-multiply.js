/* 
chairWood = 3cft/chair
tableWood = 10cft/table
badWood = 50 cft/bad
*/
function woodCalculator(chairQuantity, tableQuantity, badQuantity){
    let perChairWood = 3;
    let perTableWood = 10;
    let perBadWood = 50;
    // Wood calculation
    let chairWoodQuantity = chairQuantity * perChairWood;
    let tableWoodQuantity = tableQuantity * perTableWood;
    let badWoodQuantity = badQuantity * perBadWood;
    // adding all wood quantity
    let totalWood = chairWoodQuantity + tableWoodQuantity + badWoodQuantity;
    return totalWood;
}
let reslut = woodCalculator(5, 1, 1);
console.log(reslut);