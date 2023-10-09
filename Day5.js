// Returning a value in JS

// Write program to add 2 numbers which returns the result
function add(num1, num2) {
  let localVariable = 0; // local variable (inside function scope)  same name don't make any
  //   conflicts in local variables if the scope is different.
  // if no return statement is there the function will return undefined
  return num1 + num2;
}

let result = add(2, 6);
console.log(result);

// Global variable and local variable

// Write program to add 2 numbers which returns the result

let car = "Audi"; // Global variable (Out of function scope)
// Global variable can be used anywhere in the entire program file

function add2(num1, num2) {
  // if no return statement is there the function will return undefined
  let localVariable = 0; // local variable (inside function scope)
  // local variable can be used only inside the same function scope we cannot use this variable outside.
  return num1 + num2;
}

let result2 = add2(2, 6);
console.log(result);

// Anonymous functions in JS (function with no name)

// function expression
let anonymousFunc = function () {
  console.log("Anonymous function");
};

let anonymousFuncArrow = () => {
  console.log("Anonymous arrow function");
};

// To execute a piece of code after a certain amount of time

// setTimeout(function, time in ms);
setTimeout(() => {
  console.log("using setTimeOut");
}, 3000);

// Immediately invoked function

(function () {
  console.log("Hello");
})();

// ES6 arrow function
let anoFunc = (() => {
  console.log("Hello");
})();
