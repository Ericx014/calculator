
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('.equal-btn');
const deleteButton = document.querySelector('.deleteButton')
const clearButton = document.querySelector('.clear-btn');
const pointButton = document.querySelector('.point-btn');
const previousOperationScreen = document.querySelector('.screen-previous');
const currentOperationScreen = document.querySelector('.screen-current');

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
)

function appendNumber(number){
    currentOperationScreen.textContent += number;
}

function setOperator(operator){
    currentOperationScreen.textContent += operator;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1;
let num2;
let operator;

function operate(num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+'){
        return add(num1, num2);

    } else if (operator === '-'){
        return subtract(num1, num2);

    } else if (operator === '*'){
        return multiply(num1, num2);

    }  else if (operator === '/'){
        if(b === 0) return null;
        return divide(num1, num2);
    } 
}

num1 = 2
num2 = 2
operator = '/';
result = operate(num1, num2, operator);

const display = document.querySelector("#display");
display.innerHTML = `${num1} ${operator} ${num2} = ${result}`;
