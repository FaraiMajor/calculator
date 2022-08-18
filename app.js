function roundAns(n) {
    return Math.round((n + Number.EPSILON) * 1000) / 1000
}

function add(x, y) {
    const ans = x + y;
    return roundAns(ans);
}

function subtract(x, y) {
    const ans = x - y;
    return roundAns(ans);
}

function multiply(x, y) {
    const ans = x * y;
    return roundAns(ans);
}

function divide(x, y) {
    const ans = x / y;
    return roundAns(ans);
}

function modulo(x, y) {
    const ans = x % y;
    return roundAns(ans);
}

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
        case '+':
            return add(x, y);
            break;
        case '-':
            return subtract(x, y);
            break;
        case 'x':
            return multiply(x, y);
            break;
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
            break;
        case '%':
            return modulo(x, y);
            break;
    }
}

const boxText = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator');
const percentage = document.querySelector('.modulo');
const backspace = document.querySelector('.backspace');
const deleteAll = document.querySelector('.erase');
const equals = document.querySelector('.equals');
const keys = document.querySelector('.btnContainer')

let firstOperand, secondOperand, displayValue, op, operation;
let isOperator = false;
let result = 0;

function init() {
    firstOperand = 0;
    secondOperand = 0;
    displayValue = '';
    result = 0;
    boxText.innerHTML = result;
}

// runs as soon as user clicked one of the number key
function updateDisplay(e) {
    displayValue += e.target.textContent;
    boxText.innerHTML = displayValue;
    if (isOperator) {
        secondOperand = e.target.textContent;
        displayValue = operate(operation, firstOperand, secondOperand);
    }
}

// runs whenever operator is clicked and save operation to global variable;
function handleOperation(e) {
    firstOperand = displayValue;
    displayValue += e.target.innerHTML;
    operation = e.target.dataset.action;
    isOperator = true;
    if (result) {
        firstOperand = result;
    }
}
numbers.forEach(keys =>
    keys.addEventListener('click', e => updateDisplay(e))
);
operator.forEach(op =>
    op.addEventListener('click', e => handleOperation(e))
);

//clear all
deleteAll.addEventListener('click', e => {
    init();
})

equals.addEventListener('click', () => {
    // set secondOperand to be either the first number after the operation or the first number after the first operation(before the equal operator)
    secondOperand =
        secondOperand || displayValue.replace(firstOperand, '').match(/[^\+|\-|\*|\/]\d*/);
    result = operate(operation, firstOperand, secondOperand);
    boxText.innerHTML = result % 1 ? Number(result.toFixed(4)) : result;
    operation = '';
});



init();