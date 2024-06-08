const prompt = require("prompt-sync")();                       
let base = prompt("Enter the base are size: ");
let height = prompt("Enter the height of area: ");

function area(base,height){
    let A;
    return A =  (base * height) / 2 ;
};

let A = area(base, height);
console.log(`${A} square unit`);