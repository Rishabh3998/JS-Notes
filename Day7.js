// Date object
// This is a pre-defined object we use this object whenever we deal with Date and time in JS
// comparison of data and calculate is easy via using this object

let date = new Date(); // By default this date object stores the current date of your browser.
console.log(date); // 2023-10-15T05:17:38.670Z

// Whenever we need some customization we can start adding parameters in Date(params) object which will customize the object
// according to the params

let newDate = new Date(2023, 11, 13, 10, 33, 56, 7); // Year, month (jan starts with 0), date, time, minutes, seconds, milliseconds
console.log(newDate); // 2023-12-13T05:03:56.007Z
// These params are optional but minimum 2 params are required for customization
// we can also pass a date in Date() in string format

let x = new Date("October 13, 2018 11:12:33");
console.log(x); // 2018-10-13T05:42:33.000Z format will be same of the output which makes comparison of dates easy.

// The value of Date object by default is storing data in milliseconds and it is calculating the milliseconds since 1 jan 1970.

// Methods (GET)
console.log(x.getTime()); // Overall time since 1 jan 1970 in milliseconds -> 1539409353000
console.log(x.getFullYear()); // 2018
console.log(x.getMonth()); // 9 -> October (Jan = 0, feb = 1, ....)
console.log(x.getDate()); // 13
console.log(x.getMinutes()); // Entered minutes
console.log(x.getHours()); // Entered hours
console.log(x.getSeconds()); // seconds
console.log(x.getDay()); // (Sun = 0, Mon = 1, ....)

// Methods (SET)
let y = new Date();
y.setFullYear(2020);
y.setSeconds(2);
y.setMonth(5);
y.setDate(y.getDate() + 50); // current date + 50 days
console.log(y);

// Date comparison
let a = new Date("October 13, 2018");
let b = new Date(); // current date

if (b > a) {
  console.log("a is past date");
} else if (b < a) {
  console.log("a is future date");
} else {
  console.log("a and b are same date");
}

// Create object via new keyword

// 1. Normal way
let obj = {
  name: "Rishabh kumar",
  age: 25,
};
console.log(obj.name);

let object = new Object();
object.name = "Rishabh kumar";
object.age = 25;
console.log(object.age);

// JS accessors (Getters and Setters)
let person = {
  name: "Rishabh kumar",
  age: 25,

  getName: function () {
    return this.name.toUpperCase();
  },
};

console.log(person.getName()); // Here we made a method so that we don't have to convert the name every time while logging
// or accessing the name property from person object

// In above code to access the name property we are using a method where we have to invoke this method to log the name.
// But if we want to get the name with any method/function invoke like a property.
// We have to use a getter

let personWithGetter = {
  name: "Rishabh kumar",
  age: 25,

  get getName() {
    return this.name.toUpperCase();
  },

  getNameMethod: function () {
    return this.name.toUpperCase();
  },
};

console.log(personWithGetter.getName); // Here we don't have to invoke

// if we have to change any property inside an object but we also have to do some post processing after changing the property
// we use setter Eg: if we changed person.name = 'dsa' with we want to save dsa as DSA in object we can use a setter

let personWithSetter = {
  name: "Rishabh kumar",
  age: 25,

  get getName() {
    return this.name.toUpperCase();
  },

  set setName(newName) {
    this.name = newName.toUpperCase();
  },

  getNameMethod: function () {
    return this.name.toUpperCase();
  },
};

personWithSetter.setName = "Vansh kumar";
console.log(personWithSetter.name); // accessing via key name

// Getter is used when we need a property after some processing on the value.
// Setter is used when we have to set/save a value after some processing.

// Object constructor function
// Before ES6 we didn't have classes in Javascript. Therefore an object constructor was used to
// create an object with almost same keys/properties and methods.

// Class is a blueprint but in object we do not consider it as a blueprint.
// Therefore we copy the entire object with same keys with different values if we want a same type of new object.
// To stop the copying step entire time for creating new object we use constructor.

let student1 = {
  firstName: "Rishabh",
  lastName: "kumar",
  age: 25,
  class: 12,
};

let student2 = {
  firstName: "Ritik",
  lastName: "kumar",
  age: 23,
  class: 10,
};

// creating object constructor

function Student(first, last, age, cls) {
  // this constructor will take properties as params
  this.firstName = first;
  this.lastName = last;
  this.studentAge = age;
  this.class = cls;
}

// Date was also using this type of object constructor where we were passing params in args

let student3 = new Student("Vansh", "Kumar", 18, 10);
// This property cannot be added like this in constructor.
// Student.nationality = 'Indian';

// This way is only for created object.
student3.nationality = "Indian";
student3.name = function () {
  return this.firstName + " " + this.lastName;
};
console.log(student3);
console.log(student3.name());

// Adding a key in student constructor

// If we need to add more properties in constructor then either we can directly add property into the constructor function or
// Invalid syntax => ConstructorFunction.property = value , Eg: Student.school = "DPS"

// To add properties later we use the concept of prototypes in JS
// Prototypes are used to add methods, properties outside constructor function

Student.prototype.stream = "Science"; // This will be present inside __proto__ in object. Hidden
let student4 = new Student("Nikhil", "Vijay", 20, 10);
console.log(student4.stream);
