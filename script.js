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
  if (+num1 === 0 || +num2 === 0) return "Err: Div by 0";
  return num1 / num2;
}

function roundSum (result) {
  if (result.toString().length > 6) {
    return result.toExponential(4);
  } 
  
  return result;
}

function operate(num1, operator, num2) {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
      
    case "-":
      result = subtract(num1, num2);
      break;
      
    case "x":
      result = multiply(num1, num2);
      break;
      
    case "÷":
      result = divide(num1, num2);
      break;
      
    default:
      break;
    }

  return roundSum(result);
}

function resetCalculator() {
  operatorInput = "";
  numberInput = "";
  displaySum = 0;

  screen.textContent = displaySum;
}
          
// Global Variables
let operatorInput = "";
let numberInput = "";
let displaySum = 0;
let lastInput = "";

// DOM Elements
const buttons = document.querySelector("#buttons");
const screen = document.querySelector("#screen");
const reset = document.querySelector(".reset");
const decimal = document.querySelector(".decimal");
screen.textContent = displaySum;

// Event Listeners
buttons.addEventListener("click", e => {
  if (e.target.className === "number") {
    if (numberInput.length < 13) {
      numberInput += e.target.textContent;
      screen.textContent = numberInput;
    }
  }

  if (e.target.className === "decimal") {
    let numArray = numberInput.split("");
    if (!numArray.includes(".")) {
      numberInput += e.target.textContent;
      screen.textContent = numberInput;
    } 
  }
  
  if (e.target.className === "operator") {
    if (operatorInput && lastInput !== "equals") {
      displaySum = operate(displaySum, operatorInput, numberInput);
      screen.textContent = displaySum;
    } else if (!operatorInput){
      displaySum = numberInput;
    }

    operatorInput = e.target.textContent;
    
    // Reset numberInput, ready for next number
    numberInput = "";
  }

  if (e.target.className === "equals") {
    if (displaySum && operatorInput && numberInput) {
      displaySum = operate(displaySum, operatorInput, numberInput);

      screen.textContent = displaySum;
      // Can remove this string reset to allow equals to continuously repeat last operation
      numberInput = "";
    }
  }

  if (e.target.className === "reset") resetCalculator();
  
  lastInput = e.target.className;
});
