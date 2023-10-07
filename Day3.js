// loops: A feature of any language that helps to re-run the same code multiple times.

// while loop

let counter = 1;

while (counter <= 10) {
  console.log("counting", counter);
  counter++;
}

let counter2 = 10;

while (counter >= 1) {
  console.log("counting", counter);
  counter--;
}

let counter3 = 1;
let sum = 0;

while (counter <= 100) {
  if (counter % 2 == 0) {
    sum += counter;
  }
  counter++;
}

console.log(sum);

// do-while loop:  statement will run even (from do scope) if the condition is false. It will definitely run one time.

let counter15 = 10;

do {
  console.log("15", counter15);
  counter15++;
} while (counter15 >= 15);

// for loop

for (let counter = 1; counter <= 10; counter++) {
  console.log("for loop", counter);
}

// Break, continue, Nested loop

// let counterBreak = 1;

// while (counterBreak <= 10) {
//   if (counterBreak === 5) break;
//   console.log("countingBreak", counterBreak);
//   counterBreak++;
// }

// let counterContinue = 1;

// while (counterContinue <= 10) {
//   if (counterContinue === 5) continue;
//   console.log("countingContinue", counterContinue);
//   counterContinue++;
// }

// for (let counterNested = 1; counterNested <= 10; counterNested++) {
//   console.log(counterNested);
//   for (let counterInner = 1; counterInner < 3; counterInner++) {
//     if (counterNested == 3) break;
//     // The above statement will break the inner loop but outer loop will still be running
//     // to break outer loop from inside. We need to use label for loops.
//     console.log(counterInner);
//   }
// }

// // With label

// outer: for (let counterNested2 = 1; counterNested2 <= 10; counterNested2++) {
//   console.log(counterNested2);
//   for (let counterInner2 = 1; counterInner2 < 3; counterInner2++) {
//     if (counterNested == 3) break outer;
//     console.log(counterInner2);
//   }
// }

// Alert, Confirm and Prompt in JS: functions to interact with the user. A pop-up comes while using these functions on FE.

// 1. alert(): shows a message
// alert("Welcome");

// 2. prompt(): shows a message, input text. It returns the text on ok or, if cancel button or escape is clicked, null
// let number = prompt("Enter your number", "8882466083");
// console.log(number);

// 3. confirm(): shows a message, confirm with OK or Cancel. It returns true for OK and false for Cancel/Escape key press.
// let decision = confirm("Are you sure? ");
// console.log(decision);

// Note: All these are pause script executions and don't allow the users/visitor to interact with the rest of the page
// until the window has been dismissed.

// Type conversion in JS

let stringVariable = "string";
console.log(typeof stringVariable);

// typeof is a keyword which tells us the type of a variable.

let type = 5 + null;
console.log(type); // 5 + null is considered as 0 or empty so 5 + 0 = 5
console.log(typeof type); // Therefore, typeof will give number

let type2 = "5" + null;
console.log(type2); // "5" + null is considered as 0 or empty so "5" + 0 = 5null string + number -> string = string
console.log(typeof type2); // Therefore, typeof will give string

// + has 2 works -> additions and concatenation
// - will only act as arithmetic operator

let type3 = "5" - 2;
console.log(type3); // "5" - 2 = 3
console.log(typeof type3); // Therefore, typeof will give number

// same goes for other arithmetic operators

let type4 = "5" * "2";
console.log(type4); // "5" * "2" = 10
console.log(typeof type4); // Therefore, typeof will give number

// NaN
let type5 = "5" * "yes";
console.log(type5); // "5" * "2" = NaN (Number * string cuz yes cannot be converted to number)
console.log(typeof type5); // Therefore, typeof will give number (NaN is number data type)

// Inbuilt functions to convert one type to another

// 1. String()

let numberType = 4;
console.log(typeof numberType);

let numberNewType = String(numberType);
console.log(typeof numberNewType);

let booleanType = false;
console.log(typeof booleanType);

let booleanNewType = String(booleanType);
console.log(typeof booleanNewType);

// 2. Number(), +variable, parseInt(variable, radix = 10), parseFloat()

let stringType = "4";
console.log(typeof stringType);

let stringNewType = Number(stringType);
console.log(typeof stringNewType);

let booleanType2 = false;
console.log(typeof booleanType2);

let booleanNewType2 = Number(booleanType);
console.log(typeof booleanNewType2); // 1 -> true, 0 -> false

let stringType2 = "Hello";
console.log(typeof stringType2);

let stringNewType2 = Number(stringType2);
console.log(stringNewType2); // NaN
console.log(typeof stringNewType2);

// + operator before variable can also convert any string into number

let bool = false;
let str = "5";

let newBool = +bool;
console.log("+ operator", newBool);
console.log("+ operator", typeof newBool);

let newStr = +str;
console.log("+ operator", newStr);
console.log("+ operator", typeof newStr);

// parseInt
let parsingStr = "787";
let newTypeParsingNumber = parseInt(parsingStr, 10);

console.log(newTypeParsingNumber);
console.log(typeof newTypeParsingNumber);

// parseFloat
let parsingStrFloat = "787";
let newTypeParsingFloat = parseFloat(parsingStrFloat);

console.log(newTypeParsingFloat);
console.log(typeof newTypeParsingFloat);

// 3. Boolean()

let noBoolType = 4;
let nowBoolType = Boolean(noBoolType);

console.log(nowBoolType);
console.log(typeof nowBoolType);

let noBoolTypeStr = "4"; // Empty string "" => false, else ("lorem") => true
let nowBoolTypeStr = Boolean(noBoolTypeStr);

console.log(nowBoolTypeStr);
console.log(typeof nowBoolTypeStr);

// String Manipulation

let userName = "Rishabh";
let greet = `Hi ${userName}`; // template literal

console.log(greet);

let stringVar = "Rishabh Kumar";
let stringVarSpace = "Rishabh \nKumar";
let stringVarTab = "Rishabh \tKumar";
let stringVarBackslash = "Rishabh \\Kumar";
let stringVarInverted = 'Rishabh "Kumar'; // template literal is best for this

console.log(
  stringVar,
  stringVarSpace,
  stringVarTab,
  stringVarBackslash,
  stringVarInverted
);

// length of string;
console.log(stringVar.length);

// ith character in a string
console.log(stringVar.charAt(3)); // 3 is index, indexes in string starts with 0
console.log(stringVar[3]); // 3 is index, indexes in string starts with 0

// concatenation
console.log(stringVar + " " + stringVarSpace);
console.log(stringVar.concat(stringVarBackslash));

// string comparison
// This comparison is done character by character by the language. It is case sensitive also.

let compareStr = "Rishabh";

if (compareStr == "Rishabh") {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

// Substring of a string -2 if not there
let wholeString = "These are the notes of DAY3.";
console.log(wholeString.substring(6, 15)); // [6, 15)   // substring(start index, end index) if not found -1

console.log(wholeString.indexOf("notes")); //  [searchString, search after the mentioned index]
console.log(wholeString.lastIndexOf("notes")); //  [searchString, search after the mentioned index]

// Remove white spaces
let withoutTrim = "  Lorem mipsk aswewa mis   ";

console.log(withoutTrim.trim()); // Remove leading and trailing both spaces
console.log(withoutTrim.trimStart()); // Remove leading spaces
console.log(withoutTrim.trimEnd()); // Remove trailing spaces

// UpperCase and LowerCase
console.log(withoutTrim.toLowerCase());
console.log(withoutTrim.toUpperCase());

// Replace
console.log(withoutTrim.replace("Lorem", "NoLorem")); // replace(searchValue: string | RegExp, replaceValue: string)

// include
console.log(withoutTrim.includes("Lorem")); // returns boolean value
