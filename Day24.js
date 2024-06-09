const prompt = require("prompt-sync")();                       
let a = prompt("Enter the number: ");
let b = prompt("Enter the number: ");


    // Find Minimum of a and b
    let result = Math.min(a, b);
    console.log(result)
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }


console.log(result);

