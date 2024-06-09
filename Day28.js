const prompt = require("prompt-sync")();                        
let n = parseInt(prompt("How many numbers?: "));


function fibonacci(n) { 
    if (n <= 1) { 
        return n; 
    } 
    return fibonacci(n - 1) + fibonacci(n - 2); 
} 
  

  
for (let i = 0; i < n; i++) { 
    console.log(fibonacci(i)); 
};