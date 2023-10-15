// Nested object
let user = {
  id: 101,
  firstName: "Rishabh",
  lastName: "Kumar",
  age: 25,
  isEmployed: true,
  Role: "Software Engineer",
  Skills: {
    frontEnd: {
      libraries: ["React.js", "Angular", "React query"],
      languages: ["Javascript", "Dart"],
    },
    backEnd: {
      libraries: ["Node.js", "Django"],
      languages: ["Javascript", "Python"],
    },
  },
};

console.log(user);
console.log(user.Skills.frontEnd.languages);

// Hoisting
// Hoist -> means lift or pull

// hello(); -> This will give error if we call a function without declaring it i.e hello is not defined.

function hello() {
  console.log("Hello World");
}

hello(); // Now no error will be there bcz hello is defined above.
// So when interpreter goes line by line and and found a function with no definition is throws error.
// But the definition is important for JS. It does not matter if function call happens after definition or before.

afterCall();

function afterCall() {
  console.log("Function calls afterwards");
}

// Here in the above code function definition is written after the invoke of the function still no error will be thrown.
// because there 2 contexts so the file is read by interpreter 2 times.
// JS will automatically call definition before invoke.

// More and better explanation on namaste javascript
// https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/

// There are 2 phases of execution done in Global execution context and Functional execution context

// The below code will give no error due to hoisting
// x = 7;
// console.log(x); // 7
// var x;

// The below code will give error
// x = 7;
// console.log(x);
// let x;

// All the declaration of variables, functions got read first then rest of the code gets executed.
// JS only auto-initialize the variable declared using var, This behavior does not work with let and const. Hence we get error.

// "use strict" // strict mode
// x = 4
// console.log(x)

// In non-strict mode even if you don't declare the variable but initialize it in the program. It will work
// But in strict mode this will not work. You won't be able to use any variable without declaration.

// Document object model (DOM)
// The DOM is an API provided by browser for manipulating HTML and XML documents (add, remove modify parts of the document/HTML).
// We call whole HTML page a document.
// When a webpage is loaded browser creates a DOM which looks like a tree. DOM Tree

// Select element by id
// id is always unique

document.getElementById("2").innerHTML = "DOM manipulation by ID";
document.getElementById("1").innerHTML = "<h1>List items</h1>";
// if id does not exist browser will return null else it will return HTML element

// Select elements more than 1, select element via class
// id is unique so we can select only one element with that specific id
// same class can be assigned to multiple elements

// This will give array of HTML elements selected
let classSelectedEle = document.getElementsByClassName("new-1"); // HTMLCollection(2) [li.new-1, li.new-1]

console.log(classSelectedEle);

for (let index = 0; index < classSelectedEle.length; index++) {
  classSelectedEle[
    index
  ].innerHTML = `${index} element of the list manipulated by DOM using class`;
}
