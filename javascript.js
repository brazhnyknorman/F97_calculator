let firstNum = null;
let secondNum = null;
let operator = null;
let displayText = [];

const body = document.querySelector("body");
const buttons = addEventsToButtons();

const displayScreen = document.querySelector(".display");
const initialDisplay = "Please Enter A Calculation";
displayScreen.textContent = initialDisplay;

/* FUNCTIONS */

function addEventsToButtons() {
  let result = [
    'btn0', 
    'btn1', 'btn2', 'btn3',
    'btn4', 'btn5', 'btn6', 
    'btn7', 'btn8', 'btn9',
    'add', 'subtract', 'multiply', 'divide', 'equals',
    'clear'
  ];

  for (let i = 0; i <= 9; i++) {
    let temp = i;
    result[i] = document.querySelector(`#btn${i}`);
  
    result[i].addEventListener('click', function(onClick) {
      considerInput(temp);
      updateDisplay();
    });
  }

  for (let i = 10; i <= 15; i++) {
    let temp = result[i];
    result[i] = document.querySelector(`#${result[i]}`)

    if (temp === "clear") {
      result[i].addEventListener('click', function(onClick) {
        clear();
        updateDisplay();
      })
    } else {
      result[i].addEventListener('click', function(onClick) {
        considerInput(temp);
        updateDisplay();
      })
    }
  }

  return result;
}

function clear() {
  firstNum = null;
  operator = null;
  secondNum = null;
  displayText = [];
  displayScreen.textContent = "0";
}

function updateDisplay() {
  let temp = "" + firstNum + " " + operator + " " + secondNum;
  temp = temp.replace(/ null/g, '');

  displayScreen.textContent = temp;
}

function considerInput(newElement) {
  const inputIsNum = (typeof newElement === "number")

  if (firstNum == null && inputIsNum) {
    firstNum = newElement;
  }
  else if (!(firstNum == null) && operator == null) {
    if (inputIsNum) {
      firstNum = "".concat(firstNum, newElement);
    }
    else {
      operator = newElement;

      if (operator === 'equals') {
        operate(firstNum, operator, null);

        operator = null;
        updateDisplay();
      }
    }
  }
  else if (!(firstNum == null) && !(operator == null)) {
    if (secondNum == null && inputIsNum) {
      secondNum = newElement;
    }
    else if (inputIsNum) {
      secondNum = "".concat(secondNum, newElement);
    }
    else if (!(secondNum == null)) {
      operate(firstNum, operator, secondNum);
      
      if (newElement === 'equals') {
        operator = null;
      } else {
        operator = newElement;
      }

      console.log("firstNum: " + firstNum);
      console.log("operator: " + operator);
      console.log("secondNum: " + secondNum);
    }
  }
}

function operate(a, mode, b) {

  let result = null;

  switch (mode) {
    case 'add':
      const sum = add(a, b);
      result = sum;
      break;
    case 'subtract':
      const difference = subtract(a, b);
      result = difference;
      break;
    case 'multiply':
      const product = multiply(a, b);
      result = product;
      break;
    case 'divide':
      const quotient = divide(a, b);
      result = quotient;
      break;
    case 'equals':
      result = a;
      break;
    default:
      break;
  }

  adjustDisplay(result);

  function adjustDisplay(result) {
    firstNum = result;
    /* operator updated in line 100*/
    secondNum = null;
    displayText = [];
  }

  function add(a, b) {
    let sum = a + b;
  
    return sum;
  }

  function subtract(a, b) {
    let result = a - b;
    return result;
  }

  function multiply(a, b) {
    let product = a * b;
    return product;
  }

  function divide(a, b) {
    let result = a / b;
    return result;
  }
}