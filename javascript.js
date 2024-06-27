let firstNum = null;
let secondNum = null;
let operator = null;

const body = document.querySelector("body");

let userDisplay = [];

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