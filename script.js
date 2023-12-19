// Operation Logic
function add(num1, num2) {
  return +num1 + +num2;
}

function subtract(num1, num2) {
  return +num1 - +num2;
}

function multiply(num1, num2) {
  return +num1 * +num2;
}
// Returns message if dividing by zero
function divide(num1, num2) {
  if (+num1 && +num2) return num1 / num2;
  return "Nope, no zeros!";
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;

    case "-":
      return subtract(num1, num2);
      break;

    case "*":
      return multiply(num1, num2);
      break;

    case "/":
      return divide(num1, num2);
      break;
  
    default:
      break;
  }
}

// Global Variables
let operatorInput = "";
let numberInput = "";
let displaySum = 0;

// DOM Elements
let buttons = document.querySelector("#buttons");
let screen = document.querySelector("#screen");
screen.textContent = displaySum;

// Event Listeners
buttons.addEventListener("click", e => {
  if (e.target.className === "number") {
    numberInput += e.target.textContent;

    screen.textContent = numberInput;
  }
  
  if (e.target.className === "operator") {
    if (operatorInput) {
      displaySum = operate(displaySum, operatorInput, numberInput);

      screen.textContent = displaySum;
    } else {
      displaySum = numberInput;
    }
    operatorInput = e.target.textContent;
    
    // Reset numberInput, ready for next number
    numberInput = "";
  }
  
});

// Reset the calculator to defaults
function resetCalculator() {
  operatorInput = "";
  numberInput = "";
  displaySum = 0;

  screen.textContent = displaySum;
}