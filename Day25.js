const prompt = require("prompt-sync")();                
let x = parseInt(prompt("Enter first number: "));
let y = parseInt(prompt("Enter second number: "));

let x1 = x;                                         
let y1 = y;                                           
while (x % y != 0)
{
    let r = x % y;
    x = y;
    y = r;
}

let gcd = y;
let lcm = (x1 * y1) / gcd;                             

console.log("GCD:", gcd);
console.log("LCM:", lcm);