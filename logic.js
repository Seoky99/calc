//global display variables 
let fNumber;
let operator;
let sNumber; 

//displayNum ref
let displayValue = "";
let display = document.querySelector("#text");

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

//handling click events 
let delegator = document.querySelector(".calc-container");

delegator.addEventListener("click", (e) => {

    if (e.target.className === "num") {

        displayValue = displayValue + e.target.id; 

        e.target.style.opacity = 0.8;
        setTimeout(() => {e.target.style.opacity = 1;}, 100);

        console.log(displayValue);
        display.textContent = displayValue; 

        console.log(e.target.id);
        console.log(typeof(e.target.id))
    }

})
