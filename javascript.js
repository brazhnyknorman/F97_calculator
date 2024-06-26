let firstNum = prompt('Enter a') * 1;
let secondNum = prompt('Enter b') * 1;
let operator = null;

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