//global display variables 
let fNumber;
let operator;
let sNumber; 

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

console.log(operate(2, 5, divide));