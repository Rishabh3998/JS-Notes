// JS Operators:

let x; // only declaration value is undefined right now.
let y;

// Assignment operator
x = 5; // 5 is assigned to x;
y = x; // value of x is assigned to y now.

// Comparison operator
x == y; // Here we are comparing the value of x and y returns boolean
x === y; // Here we are comparing the value and data type of x and y returns boolean

// Addition operator
let z;
z = x + y;

// subtraction operator
let z2;
z2 = x - y;

// multiplication operator
let z3;
z3 = x * y;

// Division operator
let z4;
z4 = x / y;

// Remainder(Modulus) operator
let z5;
z5 = x % y;

// Assignment (re-assign)
// x = x + 2;
// x += 2;

// Power of any number
let number = 5;
// find 5 with power of 4
let result;
result = number ** 4;

// String + number => String (Number gets converted to string)
let num = 5;
let str = "5";

let add = num + str;

// Rules
// 1. String + String => String (String concatenation) Addition operator is used to concatenate
// 2. String + number => string

add = num + " " + str; // added space between num and str while concatenating

add = `${num} ${str}`; // template literal

// increment operator
// x += 1;
// x = x + 2;
x++;

// decrement operator
x--;

// Generally follows BODMAS rule in JS also.
let b = 5;
b = x + 5 / 5; // division will be done first the addition will be done

// To make brackets calculate first b = (x + 5) / 5;

// For more info can look up the precedence table.

console.log("x", x);
console.log("y", y);
console.log("z", z);
console.log("z2", z2);
console.log("z3", z3);
console.log("z4", z4);
console.log("z5", z5);
console.log("result", result);
console.log("add", add);

// Data Types: JS is dynamically typed language
// To use it statically use typescript
// 1. number: integers
// 2. string
// 3. boolean: true or false
// 4. Undefined: if variable is not initialized
// 5. Null: empty value
// 6. Symbol
// 7. Object
// 8. BigInt
// 9. Array: list of multiple data type values

let dynamicDataType; // undefined
console.log(dynamicDataType);
dynamicDataType = null; // null
console.log(dynamicDataType);
dynamicDataType = 5; // number
console.log(dynamicDataType);
dynamicDataType = "hello"; // string
console.log(dynamicDataType);
dynamicDataType = false; // boolean
console.log(dynamicDataType);
dynamicDataType = true; // boolean
console.log(dynamicDataType);
dynamicDataType = ["true", true, 1]; // array
console.log(dynamicDataType);
dynamicDataType = {
  // object
  name: "Person",
  age: 25,
};
console.log(dynamicDataType);
console.log(typeof dynamicDataType);

// Comparison and logical operators in JS

// Comparison (result is boolean)
// 1. >=  greater then equal to
// 2. <=  less then equal too
// 3. >  greater then
// 4. <  less then
// 5. == is equal to (values)
// 6. === is equal to (values + data type)
// 7. != not equal to gives boolean
// 8. !==  not equal to with data type gives boolean

// Logical operators (result is boolean)
// 1. AND (&&) both conditions must be true
// -> T,T => T ; T,F => F ; F,T => F ; F,F => F
// 2. OR (||)
// -> T,T => T ; T,F => T ; F,T => T ; F,F => F
// 3. NOT (!)
// -> T => F ; F => T

// Conditions in JS
// 1. if(condition)
// 2. else if (condition)
// 3. else {}

let age = 18;

if (age <= 18) {
  console.log("you cannot drive");
} else if (age >= 60) {
  console.log("Too old to drive");
} else {
  console.log("You can drive");
}

// any positive number is truthy value so it gives true
// 0 is falsy value so it will give false

// Ternary operator
// condition ? true result : false result;

let dummy = 5;
dummy === 5 ? console.log("It is 5") : console.log("It is not 5");

// nullish coalescing operator

// The nullish coalescing (??) operator is a logical operator that returns
// its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.
const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

// optional chaining

// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null,
// the expression short circuits and evaluates to undefined instead of throwing an error.

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

// Switch statement

let input = "n";

switch (input) {
  case 1:
    console.log("continue");
    break;
  case "yes":
    console.log("continue");
    break;
  case "y":
    console.log("continue");
    break;
  case "no":
    console.log("end");
    break;
  case 0:
    console.log("end");
    break;
  case "n":
    console.log("end");
    break;
  default:
    console.log("bye");
    break;
}
