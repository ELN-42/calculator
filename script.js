function add(value1, value2){
    return value1 + value2;
}

function subtract(value1, value2){
    return value1 - value2;
}

function multiply(value1, value2){
    return value1 * value2;
}

function divide(value1, value2){
    if(value2===0){
        console.log("Error: Zero Division!");
        return 0;
    }
    return value1 / value2;
}

function operate(value1, value2, operation){
    if(operation==="+"){
        return add(value1, value2);
    }
    else if(operation==="-"){
        return subtract(value1, value2);
    }
    else if(operation==="*"){
        return multiply(value1, value2);
    }
    else if(operation==="/"){
        return divide(value1, value2);
    }
}


let operator;
let firstvalue;
let secondvalue;
