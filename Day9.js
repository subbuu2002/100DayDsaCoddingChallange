function checkNum(value){
    if(value > 0){
        return `${value}, "Is Positive"`
    }else if(value == 0){
        return `${value}, "Is Zero"`
    }else{
            return `${value}, "Is Nagative"`
    }
}

let value = -1;
let check = checkNum(value);
console.log(check)