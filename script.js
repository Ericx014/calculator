let numOne = '';
let numTwo = '';
let currentOperator = null;
let shouldResetScreen = false;

// Display
const previousScreen = document.querySelector('.screen-previous');
const currentScreen = document.querySelector('.screen-current');

// Buttons
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('.equals-btn');
const deleteButton = document.querySelector('.delete-btn');
const clearButton = document.querySelector('.clear-btn')

// Assign event listener
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)
operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)
equalsButton.addEventListener('click', evaluate);
deleteButton.addEventListener('click', deleteNumber);
clearButton.addEventListener('click', clear);

// Functions (interactivity)
function appendNumber(number){
    if (currentScreen.textContent === '0' || shouldResetScreen){resetScreen()}
    currentScreen.textContent += number;
}
function resetScreen(){
    currentScreen.textContent = '';
    shouldResetScreen = false;
}
function setOperation(operator){
    if (currentOperator !== null){evaluate()}
    numOne = currentScreen.textContent;
    currentOperator = operator;
    previousScreen.textContent = `${numOne} ${currentOperator}`
    shouldResetScreen = true;
}
function evaluate(){
    if (currentOperator === null || shouldResetScreen) return;
    if (currentOperator === '/' && currentScreen.textContent === '0'){
        alert('Cannot divide by 0!');
        return;
    }
    numTwo = currentScreen.textContent;
    currentScreen.textContent = operate(numOne, numTwo, currentOperator);
    previousScreen.textContent = `${numOne}${currentOperator}${numTwo}`;
    currentOperator = null;
}
function deleteNumber(){
    let contentAfterDelete = currentScreen.textContent
    .toString()
    .slice(0, -1); 
    currentScreen.textContent = contentAfterDelete;
}
function clear(){
    currentScreen.textContent = '';
    previousScreen.textContent = '';
    numOne = '';
    numTwo = '';
    currentOperator = null;
}

// Calculation functions
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