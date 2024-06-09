const prompt = require("prompt-sync")();                     
let x = parseInt(prompt("Enter lower number: "));
let p = 1;

if (x == 0)
{
    console.log(`Factorial of ${x} is 1`);
}
else
{
    for (let i = x; i > 0; i--)
    {
         p *= i;
    }
    console.log(`Factorial of ${x} is ${p}`);
}