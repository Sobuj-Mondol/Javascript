let phones = [
    {Name: 'shaomi', price: 10000, camera: 13, storang: 16},
    {Name: 'samphony', price: 8000, camera: 8, storang: 8},
    {Name: 'nokia', price: 50000, camera: 48, storang: 128},
    {Name: 'samsung', price: 20000, camera: 32, storang: 64},
    {Name: 'iphone', price: 70000, camera: 62, storang: 128},
    {Name: 'itell', price: 5000, camera: 13, storang: 16},
];
let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
 }
 console.log(cheapest);