const prompt = require("prompt-sync")();                       
let num = prompt("Enter the Number: ");

for(let i=1; i<=10; i++){
    let value = num * i
    console.log(`${num} * ${i} = ${value}`)
}