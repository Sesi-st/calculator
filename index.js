const number = document.getElementById("number");
const clearBtn = document.getElementById("clearBtn");
const btns = document.querySelectorAll(".buttons button:not(#clearBtn):not(#equalto)");
const name = document.getElementById("name");


let currentNumber = '';
let previousNumber = '';
let operator = '';

// Updates the display
function updateDisplay() {
    number.textContent = currentNumber;
}

// Handles the number button clicks
function handleNumberClick(num) {
    currentNumber += num;
    updateDisplay();
}

// Handles the operational button clicks
function handleOperatorClick(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

// Performs calculation
function calculate() {
    let result;
    const prevNum = parseFloat(previousNumber);
    const currentNum = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = prevNum + currentNum;
            break;
        case '-':
            result = prevNum - currentNum;
            break;
        case '*':
            result = prevNum * currentNum;
            break;
        case '/':
            result = prevNum / currentNum;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
    updateDisplay();
}

// Event listeners for number buttons
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        handleNumberClick(btn.textContent);
    });
});

// Event listener for clear button
clearBtn.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
})
// Event listeners for operator buttons
document.getElementById("divide").addEventListener('click', () => {
    handleOperatorClick('/');
});

document.getElementById("multiply").addEventListener('click', () => {
    handleOperatorClick('*');
});

document.getElementById("minus").addEventListener('click', () => {
    handleOperatorClick('-');
});

document.getElementById("plus").addEventListener('click', () => {
    handleOperatorClick('+');
});

// Event listener for equal button
document.getElementById("equalto").addEventListener('click', () => {
    if (currentNumber !== '' && previousNumber !== '' && operator !== '') {
        calculate();
    }
});