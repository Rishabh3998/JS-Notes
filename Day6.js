// Objects in JS

// 1. Properties
// 2. Actions/Functions/Methods

// Eg: Human object -> Properties: Name, Mobile no., Height, weight, address etc
// Eg: Car object -> Properties: Brand, model, variant, price, etc
// ->  Actions: Drive, Park, Servicing

// Objects
let emptyObject = {}; // No properties are there i.e empty object
let person = {
  name: "Rishabh kumar",
  age: 25,
  mobile_number: "8882466083",
  address: "A-14 Shakurpur ",
  city: "New Delhi",
};

console.log(person);

// Accessing property from the object
let getName = person.name;
console.log(getName);

let getAddress = person.address;
console.log(getAddress);

let getCity = person["city"];
console.log(getCity);

// Types of variable cases in programming world
// 1. camelCase: variableName
// 2. snake_case: variable_name
// 3. kebab-case: variable-name
// 4. PascalCase: VariableName
// 5. MACRO_CASE: VARIABLE_NAME
// 6. Train-Case: Variable-Name

// properties that don't exist will give undefined
console.log(person.personName); // undefined

// Modify the value of any property
person.name = "Modified name";
console.log(person.name);

// Adding a non-existing new property in the object
person.newProperty = "New property";
console.log(person);

delete person.newProperty;
console.log(person);

// To find if a property exist in a object or not
console.log("newProperty" in person); // returns boolean

// Iterating over properties of an object
for (let key in person) {
  console.log(key); // print all the key names
  console.log(person[key]); // print all the values of each key use array notation object[keyName], dot notation will
  // not be able to fetch the value and return undefined
}

// In JavaScript, when you hear the term "loop", you probably think of using the various
// loop methods like for loops, forEach(), map() and others.
// But in the case of objects, unfortunately, these methods don't work because objects are not iterable.

// This doesn't mean we can't loop through an
// object – but this means that we can't loop through an object directly the same way we do for an array:

// For in loop
const population1 = {
  male: 4,
  female: 93,
  others: 10,
};

// Iterate through the object
for (const key in population1) {
  if (population1.hasOwnProperty(key)) {
    console.log(`${key}: ${population1[key]}`);
  }
}

// To avoid the stress and difficulty of looping and to use the hasOwnProperty method,
// ES6 and ES8 introduced object static methods.
// These convert object properties to arrays, allowing us to use array methods directly.
// Article link: https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/

// An object is made up of properties that have key-value pairs, that is each property always has a corresponding value.
// Object static methods let us extract either keys(), values(), or
// both keys and values as entries() in an array, allowing us to have as much flexibility over them as we do with actual arrays.
// We have three object static methods, which are:

// Object.keys()
const population2 = {
  male: 4,
  female: 93,
  others: 10,
};

let genders = Object.keys(population2);

console.log(genders); // ["male","female","others"]

// Object.values()
const population3 = {
  male: 4,
  female: 93,
  others: 10,
};

let numbers = Object.values(population3);

console.log(numbers); // [4,93,10]

// Object.entries()
const population4 = {
  male: 4,
  female: 93,
  others: 10,
};

let populationArr = Object.entries(population4);

console.log(populationArr); // [ [ 'male', 4 ], [ 'female', 93 ], [ 'others', 10 ] ]

for ([key, value] of populationArr) {
  console.log(key);
  console.log(value);
}

// Objects methods in JS
// Any functions associated to any object is a method of that object

// using anonymous function
person.sayHello = () => {
  console.log(`Hello ${person.name}`);
};

person.sayHello();

// Linking function name with objects new key
function greet() {
  console.log(`Hello ${person.name}`);
}

person.sayHello2 = greet;
person.sayHello2();
console.log(person);

// Declare function while creating object
let dummy = {
  dummyFunc: function () {
    console.log("Dummy func");
  },
};

dummy.dummyFunc();

// ES6 version way:
let dummyES6 = {
  dummyFunc() {
    console.log("ES6 dummy func");
  },
};

dummyES6.dummyFunc();

// This keyword
let object = {
  prop1: "Prop1",
  prop2: "prop2",
  prop3() {
    console.log(car.brand);
    // if we have to access any property of the same object within itself via method then we use `this` keyword
    console.log(this.prop1);
  },
};

let car = {
  model: "Prop1",
  year: "prop2",
  brand: "Tata",
};

// accessing an objects property within a different object is possible
object.prop3();

// Math object inside JS

// Printing Pi == 22/7 via Math object
console.log(Math.PI);

// Printing Euler's number via Math object
console.log(Math.E);

// Rounding off
let number = 4.7;
console.log(Math.round(number)); // 5

let number2 = 4.2;
console.log(Math.round(number2)); // 4

// ceil value
console.log(Math.ceil(number2)); // 5  upper limit of entered number

// Floor value
console.log(Math.floor(number2)); // 4 lower limit of entered number

// truncate the value
console.log(Math.trunc(number2)); // will remove the decimal value

// power(x = base, y = power)
console.log(Math.pow(2, 4)); // 16

// sqrt
console.log(Math.sqrt(9)); // 3

// Minimum in the stream of a number
console.log(Math.min(8, -1, 34, -10, 5)); // -10 same for max (Math.max(numbers))

// Generate random number
let randomNum = Math.random(); // generate between [0,1) range will be 0.0.... to 0.9....
console.log(randomNum);

// Generate random number between 0 to 9
let numberRandom = Math.floor(Math.random() * 10); // 0 to 9
let numberRandomBetween0To10 = Math.floor(Math.random() * 11); // 0 to 9
let numberRandomBetween0To99 = Math.floor(Math.random() * 100); // 0 to 99

// Math.floor(Math.random() * x+1) [0, x]
// Math.floor(Math.random() * x+1) + 1  [1, x]

console.log(numberRandom);
console.log(numberRandomBetween0To10);
console.log(numberRandomBetween0To99);

// here we are only generating numbers between 0 to n what if we need something else then 0
// Eg: generating number between 15 to 25
// Formula: Math.random() * (MaxNumber - MinNumber) => Math.random() * (25-15)
// Max will not be included, minimum will be included
// So the numbers will be generated between 15 to 24
// step 2: Math.floor(Math.random() * (25 - 15) + minNumber = 15)
let x = Math.floor(Math.random() * (25 - 15) + 15); // 15 to 24
console.log(x);

function getRandom(min, max) {
  // max will not be included
  let x = Math.floor(Math.random() * (max - min) + min);
  return x;
}

let range = getRandom(1, 11);
console.log(range);
