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
    'btn1', 'btn2', 'btn3',
    'btn4', 'btn5', 'btn6', 
    'btn7', 'btn8', 'btn9',
    'add', 'subtract', 'multiply', 'divide', 'equals',
    'clear'
  ];

  for (let i = 0; i <= 8; i++) {
    let temp = i + 1;
    result[i] = document.querySelector(`#btn${i+1}`);
  
    result[i].addEventListener('click', function(onClick) {
      considerInput(temp);
    });
  }

  for (let i = 9; i <= 14; i++) {
    let temp = result[i];
    result[i] = document.querySelector(`#${result[i]}`)

    if (temp === "clear") {
      result[i].addEventListener('click', function(onClick) {
        clear();
      })
    } else {
      result[i].addEventListener('click', function(onClick) {
        considerInput(temp);
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
  
}

function considerInput(newElement) {
  const inputIsNum = (typeof newElement === "number")
  const inputComplete = null;

  if (firstNum == null && inputIsNum) {
    firstNum = newElement;
    console.log(firstNum);
    console.log('init firstNum');
  }
  else if (!(firstNum == null) && operator == null) {
    if (inputIsNum) {
      firstNum = "".concat(firstNum, newElement);
      console.log(firstNum);
      console.log('more on firstNum');
    }
    else {
      operator = newElement;
      console.log(operator);
      console.log('init operator');
    }
  }
  else if (!(firstNum == null) && !(operator == null)) {
    if (secondNum == null && inputIsNum) {
      secondNum = newElement;
      console.log(secondNum);
      console.log('init secondNum');
    }
    else if (inputIsNum) {
      secondNum = "".concat(secondNum, newElement);
      console.log(secondNum);
      console.log('more on secondNum');
    }
    else {
      operate(firstNum, operator, secondNum);
      operator = newElement;

      console.log("firstNum: " + firstNum);
      console.log("operator: " + operator);
      console.log("secondNum: " + secondNum);
    }
  }

  displayText.push(newElement);

  temp = displayText.toString().replace(/,/g, '');

  displayScreen.textContent = temp;
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
  
    default:
      break;
  }

  adjustDisplay(result);

  function adjustDisplay(result) {
    firstNum = result;
    /* operator updated in line 93*/
    secondNum = null;
    displayText = [];
    displayScreen.textContent = "" + firstNum;
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