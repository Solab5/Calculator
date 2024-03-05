// add
const add = function(a, b) {
    return a + b;
};
// subtract
const subtract = function(a, b) {
    return a - b;
};
// multiply
const multiply = function(a, b) {
    return a * b;
};
// divide
const divide = function(a, b) {
    return a / b;
};

// number 
let firstNumber;
let operator;
let secondNumber;

const operate = function(operator,firstNumber, secondNumber) {
    calculate = operator(firstNumber, secondNumber);
    return calculate;
}

// let displayValue = '';

const display = document.querySelector('.calculator-display');

const numberButtons = document.querySelectorAll('.calculator-keys');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = button.textContent;
    });
});

// function appendNumber(number) {
//     displayValue += number;
// };

// function UpdateValue(){
//     display.textContent = displayValue;
// }