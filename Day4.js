// Array in JS

let book1 = "Maths";
let book2 = "Physics";
let book3 = "Bio";
let book4 = "CS";
book3 = "Physical chem"; // updating variable

console.log(book3); // Bio, we cannot always use variables to store group of values. hence solution is Array.

let books = ["Maths", "physics", "Bio", "CS"];
books[2] = "Physical chem"; // updating value in array
console.log(books[2]); // Bio  2 => index in array, index starts with 0

let books2 = new Array("Maths", "physics", "Bio", "CS");
console.log(books2[2]);

let multipleTypes = ["Maths", 1, 40.3, { name: "Rishabh", lastName: "Kumar" }];
// array can also store different data type values.
console.log(multipleTypes);

// last index of an array will be ArrayName.length - 1

// Operations in Array

let array = ["Maths", "physics", "Bio", "CS"];
console.log(array);

// length of an array
console.log(array.length);

// Adding at last index in current array
array.push("physical chem");
console.log(array);

// Adding element at front index in current array
array.unshift("first book");
console.log(array);

// Remove last element form current array
array.pop();
console.log(array);

// Remove element from front index = 0 from current array
array.shift();
console.log(array);

// Remove elements from any arbitrary starting index (like 2 || 5 etc) and how many elements to remove
// ArrayName.splice(startingIndex, numberOfElementsToRemove)
// array.splice(1, 1);
// array.splice(2, 1);
array.splice(2, 2);
console.log(array);

// make array empty
// 1. ArrayName = [] // re-initializing it with new empty array
// 2. ArrayName.length = 0 // make array length 0 so it will automatically become empty

// Find index of any element
console.log(array.indexOf("physics"));

// To check if a variable is array or not
console.log(Array.isArray(array)); // return boolean as answer -> true
console.log(Array.isArray(book1)); // return boolean as answer -> false

// Split a string and convert it into an array
let text = "This is a string which will be split later";
let splitString = text.split("s"); // entered string in split will also be removed form the given string.

console.log(splitString); // [ 'Thi', ' i', ' a ', 'tring which will be ', 'plit later' ]

// Join all elements of an array with a character/string entered in join()

let joinedArray = books.join(","); // joined by ,
console.log(joinedArray); // Maths,physics,Physical chem,CS

// Joining n number of  arrays

let array1 = ["book1", "book2", "book3"];
let array2 = ["author1", "author2", "author3"];
let array3 = ["user1", "user2", "user3"];

let joinedArrays = array1.concat(array2, array3);
console.log(joinedArrays);
/* [
    'book1',   'book2',
    'book3',   'author1',
    'author2', 'author3',
    'user1',   'user2',
    'user3'
] */

// Multi-dimensional array (Array inside array)

let bookWithPages = [
  ["Math", 300],
  ["Hindi", 100],
  ["Physics", 500],
];
console.log(bookWithPages[1]); // [ 'Hindi', 100 ]
console.log(bookWithPages[1][1]); // 100

// Looping in array
const scores = [22, 54, 76, 92, 43, 33];

// while loop
let i = 0;

while (i < scores.length) {
  console.log(scores[i]);
  i++;
}

// do-while loop
let j = 0;

do {
  console.log(scores[j]);
  j++;
} while (j < scores.length);

// for loop (standard)
for (let i = 0; i < array1.length; i++) {
  console.log(`${array1[i]} \n`);
}

// for in loop
// i is like an iterator
for (i in scores) {
  console.log(scores[i]);
}

// for of loop introduced in ES6
// for (score of scores) {
//   console.log(score);
// }

// for each loop
scores.forEach((score) => {
  console.log(score);
});

// for each one liner
scores.forEach((score) => console.log(score));

// Functions in JS and Parameters and arguments
// ArrayName.length it is a property not a function
// function will consist () open-close parenthesis
// 1. Pre-defined 2. User defined

// Write function to print table of any number
// printTable(number);

// Traditional way of creating function
function printTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

// ES6/ES2015 way of creating function
const printTableES6 = (number) => {
  // number is parameter of this function
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
};

printTable(2); // 2 is argument of this function
printTableES6(3);

// Add 2 numbers
function add(num1, num2) {
  console.log(num1 + num2);
}

add(2, 6);

const add2Numbers = (num1, num2) => {
  console.log(num1 + num2);
};

add2Numbers(4, 6);

// The Arguments object in JS
// In a function it is not mandatory that only 2 or 3 args can pass we can pass multiple args
// hence we use args object
// Eg: Add the n numbers passing into a function bcz user can pass multiple numbers to get the sum of those as result
// when we pass any arguments in a function then the func itself provides us an arguments object which consists of all the
// arguments we passed into the function.

function testingArgs() {
  console.log(arguments.length); // arguments is an object with args passed into this function
  console.log(arguments); // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5.1 }
}

testingArgs(2, 3, 4, 5.1);

function newFunc() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let resultOfSum = newFunc(2, 3, 4, 5);
console.log(resultOfSum);
