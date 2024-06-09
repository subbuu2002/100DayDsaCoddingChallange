const prompt = require("prompt-sync")();                       
let x = prompt("Enter the number: ");

let i , sum;

sum = 0;

for(i=1; i<=x; i++){
    sum+=i
};
console.log(sum)