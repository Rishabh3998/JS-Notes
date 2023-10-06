// Day 1

// 1. JS introduction

// Best Intro of JS and its History

// Javascript (JS) is a light weight object oriented programming language
// which is used by several websites for scripting the webpages. It is an interpreted
// full fledged programming language that enables dynamic interactivity on websites
// when applied to an HTML document.

// Usage of JS to create interactive websites
// 1. Client side (Frontend) validation.
// 2. Popup
// 3. Event on click etc.....
// 4. SPAs:  Single page applications (Websites that doesn't reload when user navigates from one page to another).
// React, Angular, Vue etc like frameworks used to create SPAs.

// ECMAscript is the standard which was followed  by Javascript while the language was in development.
// ECMA international org set the standard for scripting language. JS follow this standard.

// ES6/ES2015/ECMAScript all are same.

// https://youtu.be/kXrFo4pq23Q?si=vtF_sPYoOZuGseUp

// Reading material
// MDN docs for JS or javascript.info
// 30-days-of-JS
// caniuse.com to check if a feature of HTML,CSS,JS is compatible or not in any browser.

// alert in JS for warnings in the browser
// alert('Any message');

// HTML, CSS, JS parses or executed line by line
// JS is a scripting language, it needs an interpreter.

// In contrast, JavaScript has no compilation step. Instead,
// an interpreter in the browser reads over the JavaScript code,
// interprets each line, and runs it. More modern browsers use a technology
// known as Just-In-Time (JIT) compilation, which compiles JavaScript
// to executable bytecode just as it is about to run.

// script tag
// <script defer src=''></script> ->  in defer whole HTML will be read fully and
// then js file will start downloading after HTML gets parsed.
// <script async src=''></script> -> in async downloading of the js file will be done in parallel with HTML reading.
// without this defer and async by default js file will be downloaded first if in head, if it is in body it will be downloaded
// in last.

// 2. Hello World

// Print in JS (in browser console)
console.log("hello world");
console.log(5 + 6);

// DOM manipulation
// document.getElementById('idOfHtmlElement').innerHTML = 'New text'

// DOM manipulation via JS, writing dynamic html using JS
// document.write('text')  -> doesn't work with defer in scrip tag

// if you want to write multi line program in browsers console
// you can press shift + enter after each terminating line to make your program a multi
// line program. If we press enter it executes the above code, if we press shift + enter
// it goes to new line.

// 3. Statement and comments

// termination of a line is done by ; (semicolon)
// comments - used to write some summary in plain english for any pre-written code.
// ways to add comments, we can use // or /* */

// Examples

// var v = 90;

/*
var a = 5;
var b = 5;
*/

// 4. Javascript variables (let, const, var)

// variables are like containers which stores data/values in them

// Example: (Before ES6/ES2015)
var a = 5; // dynamically typed variable, a is initialized with a number. since it is dynamically typed this variable
// can take any type of data.
console.log("before", a);
console.log(typeof a);
a = "string data type";
console.log("after", a);
console.log(typeof a);

// Example: (After ES6/ES2015)
// Introduced const and let
const variable_1 = 5; // This cannot be re-initialized since it is a constant
let variable_2 = 10; // This can be re-initialized
let x = 5,
  y = "john"; // initialized 2 variables in a single row

// No initialization type declaration
let x1; // if not initialized then be default x1 will store undefined.
console.log("x1", x1);
x1 = 24;
console.log("x1", x1);

// Rules to name a variable
// 1. Can only start with a letter, $, or _ (underscore)
// 2. Starting with a number or any other special character is not allowed.
// 3. variable names are case sensitive.
// 4. Cannot use reserve keywords as variable names like: let, const, var, while, for etc.
