let firstNum = null;
let secondNum = null;
let operator = null;

const body = document.querySelector("body");

const displayScreen = document.querySelector(".display");
const initialDisplay = "Please Enter A Calculation";
displayScreen.textContent = initialDisplay;

const buttons = addEventsToButtons();

let displayText = [];

/* EVENT LISTENERS */

displayScreen.addEventListener('click', function(onClick) {

});



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
    result[i] = document.querySelector(`#btn${i+1}`);
  
    result[i].addEventListener('click', function(onClick) {
      console.log(i+1);
    });
  }

  for (let i = 9; i <= 14; i++) {
    let temp = result[i];
    result[i] = document.querySelector(`#${result[i]}`)

    result[i].addEventListener('click', function(onClick) {
      console.log(temp);
    })
  }



  /*

  let calculatorFunctions = ['+', '-', 'x', '÷', '=', 'clear'];
  
  for (let i = 1; i <= 9; i++) {
    buttons[i] = document.querySelector(`#btn${i}`);
  
    buttons[i].addEventListener('click', function(onClick) {
      console.log(i);
    });
  }

  calculatorFunctions.forEach(button => {
    
  });
  */
  return result;
}

function operate(a, operator, b) {
  function add(a, b) {
    let sum = a + b;
  
    console.log(sum);
    return sum;
  }

  function subtract(a, b) {
    let result = a - b;
    console.log(result);
    return result;
  }

  function multiply(a, b) {
    let product = a * b;
    console.log(product);
    return product;
  }

  function divide(a, b) {
    let result = a / b;
    console.log(result);
    return result;
  }
}