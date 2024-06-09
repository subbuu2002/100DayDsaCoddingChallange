const prompt = require("prompt-sync")();                       
let A = prompt("Enter the number: ");
let B = prompt("Enter the number: ");

let num1 = A % 10;
let num2 = B % 10;

if(num1 == num2){
    console.log("Numbers last digit are same")
}else{
    console.log('Numbers last digit is not same')
}

