const boxText = document.querySelector('p');
const numbers = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator');
const percentage = document.querySelector('.modulo');
const backspace = document.querySelector('.backspace');
const deleteAll = document.querySelector('.erase');
const equals = document.querySelector('.equals');

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
            if (y == 0) {
                boxText.textContent = "Error";
            } else
                return divide(x, y);
            break;
    }
}

function updateDisplay() {

}

// function roundAns(answer) {
//     if (answer.toString().indexOf('.') !== -1) {
//       if (answer.toString().split('.')[1].length > 5) {
//         return answer.toFixed(5);
//       }
//     }
//     return answer;
//   }