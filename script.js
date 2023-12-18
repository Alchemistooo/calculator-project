// Operator Logic
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
let firstNum;
let operator;
let num2;
let displayValue = 0;

// DOM Elements
let buttons = document.querySelector("#buttons");
let screen = document.querySelector("#screen");
screen.textContent = displayValue;


// Event Listeners
buttons.addEventListener("click", e => {
  if (e.target.className === "number") {
    displayValue = e.target.textContent;
  }
  screen.textContent = displayValue;
});

