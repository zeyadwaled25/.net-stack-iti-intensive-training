// Task 1 – Error Handling Basics
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log("Result =", a / b);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

divideNumbers(10, 2);
divideNumbers(10, 0);


// Task 2 – Custom Error
function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("Invalid Age");
    }
    console.log("Valid Age");
  } catch (error) {
    console.log(error.message);
  }
}

checkAge(20);
checkAge(15);


// Task 3 – finally Usage
let user = { name: "Zeyad" };

try {
  console.log(user.age.name);
} catch (error) {
  console.log("Error occurred");
} finally {
  console.log("Done");
}


// Task 4 – Factory Function
function createStudent(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log(`Hello, my name is ${name}`);
    }
  };
}

let student1 = createStudent("Zeyad", 20);
student1.sayHello();


// Task 5 – Constructor Function
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

let student2 = new Student("Ahmed", 22);
student2.sayHello();


// Task 6 – Object Methods
let numbersObj = {
  numbers: [10, 20, 30, 40],
  sum() {
    return this.numbers.reduce((acc, num) => acc + num, 0);
  },
  average() {
    return this.sum() / this.numbers.length;
  }
};

console.log("Sum =", numbersObj.sum());
console.log("Average =", numbersObj.average());


// Task 7 – Data Descriptor
let obj = {};

Object.defineProperty(obj, "id", {
  value: 123,
  writable: false,
  enumerable: false
});

console.log(obj.id);


// Task 8 – Accessor Descriptor
let person = {
  firstName: "Zeyad",
  lastName: "Waled",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName);
person.fullName = "Ahmed Ali";
console.log(person.fullName);


// Task 9 – IIFE Pattern
let counterModule = (function () {
  let counter = 0;

  return {
    increment() {
      counter++;
    },
    getValue() {
      return counter;
    }
  };
})();

counterModule.increment();
counterModule.increment();
console.log(counterModule.getValue());


// Task 10 – Closure
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


// Task 11 – BOM - Timer
let i = 1;
let interval = setInterval(() => {
  console.log(i);
  i++;
  if (i > 10) {
    clearInterval(interval);
  }
}, 1000);


// Task 13 – Window Timers
setTimeout(() => {
  console.log("Printed after 3 seconds");
}, 3000);

let count = 0;
let interval2 = setInterval(() => {
  console.log("Repeating...");
  count++;
  if (count === 5) {
    clearInterval(interval2);
  }
}, 1000);


// Task 14 – Digital Clock
setInterval(() => {
  let now = new Date();

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);