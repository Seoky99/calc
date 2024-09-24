//global display variables 
let fNumber = null;
let op = null;
let sNumber = null; 

//displayNum ref
let displayValue = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    return a / b; 
}

function operate(a, b, op) {
    return op(a, b);
}

function changeDisplay(changeTo) {
    displayValue = changeTo; 
    let display = document.querySelector("#text");
    display.textContent = displayValue;  
}

//responsive action on click, lowers opacity for 1 second
function changeOpacityOnClick(e) {
    e.target.style.opacity = 0.8;
    setTimeout(() => {e.target.style.opacity = 1;}, 100);
}

function changeOperator(id) {
    switch (id) {
        case "add":
            return add; 
        case "subtract":
            return subtract; 
        case "divide":
            return divide; 
        case "multiply":
            return multiply; 
        default: 
            throw new Error(); 
    }
}



//handling click events AND logic for clicking 
let delegator = document.querySelector(".calc-container");

delegator.addEventListener("click", (e) => {

    if (e.target.className === "num") {

        if (op == null) {

            fNumber = fNumber == null ? e.target.id : fNumber + e.target.id;
            changeDisplay(fNumber);

        } else {

            sNumber = sNumber == null ? e.target.id : sNumber + e.target.id;
            changeDisplay(sNumber);

        }

        changeOpacityOnClick(e); 

    } else if (e.target.className === "op") {

        if (e.target.id ==="clear") {

            fNumber=null;
            sNumber=null;
            op=null;
            changeDisplay("0");
            console.log("here");

        } else if (sNumber==null) {
       
            op = changeOperator(e.target.id);


        } else {

            fNumber = (operate(Number(fNumber), Number(sNumber), op)).toString(); 
            sNumber = null; 
            op = changeOperator(e.target.id);
            changeDisplay(fNumber);

        }

        changeOpacityOnClick(e); 

    } else if (e.target.className==="equals") {

        if (sNumber != null && op != null) {
            fNumber = (operate(Number(fNumber), Number(sNumber), op)).toString(); 
            sNumber = null; 
            op = null;
            changeDisplay(fNumber);
        }
    } 

})