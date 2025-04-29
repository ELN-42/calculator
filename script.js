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

function setnumber(value){
    let display = document.querySelector(".display");
    display.textContent += value;
    data.value2 = Number((data.value2*10) + value);
}

function setoperator(value){
    let display = document.querySelector(".display");
    if(data.operator === ""){
        data.operator = value;
        data.value1 = data.value2;
        data.value2 = null;
        display.textContent = "";
    }
    else{
        let tmp = operate(data.value1, data.value2, data.operator)
        display.textContent = tmp;
        data.value1 = tmp;
        data.operator = "";
    }
}

function equalsign()
{
    let display = document.querySelector(".display");
    let tmp = operate(data.value1, data.value2, data.operator);
    display.textContent = tmp;
    data.value2 = tmp;
    data.value1 = null;
    data.operator = "";
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
let ac = document.querySelector("#ac");
ac.addEventListener("click", () => console.log("Value1: "+ data.value1 + " Value2: "+ data.value2 + " Operator: "+ data.operator));

let data = {"value1": null, "value2": null, "operator": ""};
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#null");

let divi = document.querySelector("#slash");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multi = document.querySelector("#multiply");
let equal = document.querySelector("#equals");

one.addEventListener("click", () => setnumber(1));
two.addEventListener("click", () => setnumber(2));
three.addEventListener("click", () => setnumber(3));
four.addEventListener("click", () => setnumber(4));
five.addEventListener("click", () => setnumber(5));
six.addEventListener("click", () => setnumber(6));
seven.addEventListener("click", () => setnumber(7));
eight.addEventListener("click", () => setnumber(8));
nine.addEventListener("click", () => setnumber(9));
zero.addEventListener("click", () => setnumber(0));

divi.addEventListener("click", () => setoperator("/"));
plus.addEventListener("click", () => setoperator("+"));
minus.addEventListener("click", () => setoperator("-"));
multi.addEventListener("click", () => setoperator("*"));
equal.addEventListener("click", () => equalsign());

