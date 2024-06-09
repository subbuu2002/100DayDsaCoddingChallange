const prompt = require("prompt-sync")();                     
let N = parseInt(prompt("Enter the decimal number: "));

function decimalToBinary(N) {
    return (N >>> 0).toString(2);
}

let binary = decimalToBinary(N);
console.log(
    "The binary representation of given number is:- " + binary);