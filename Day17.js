const prompt = require("prompt-sync")();                    
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

let firstnum = num1 % 10 ;
let secondnum = num2 % 10;

if(firstnum == secondnum){
    console.log("Last digit is same")
}else{
    console.log("last digit is not same")
}