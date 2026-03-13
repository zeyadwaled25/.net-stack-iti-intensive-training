// Task 1 – Variables and Console
let name = "Zeyad";
let age = 20;
let city = "Menoufia";

console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}.`);

// Task 2 – Simple Calculator
let num1 = 10;
let num2 = 5;

console.log("Sum =", num1 + num2);
console.log("Subtraction =", num1 - num2);
console.log("Multiplication =", num1 * num2);
console.log("Division =", num1 / num2);

// Task 3 – If Condition
let ageCheck = 20;

if (ageCheck >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are underage");
}

// Task 4 – Even or Odd
let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Task 5 – Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 6 – Sum of Numbers
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum =", sum);

// Task 7 – Array Basics
let fruits = ["apple", "banana", "orange", "mango", "grapes"];

console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);
console.log("Length:", fruits.length);

// Task 8 – Loop Through Array
let students = ["Ahmed", "Sara", "Ali", "Mona", "Omar"];

for (let i = 0; i < students.length; i++) {
  console.log("Student:", students[i]);
}

// Task 9 – Function
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

console.log(greetUser("Zeyad"));

// Task 10 – Largest & Smallest Number
let numbers = [10, 3, 50, 22, 8];

let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

console.log("Largest number =", largest);
console.log("Smallest number =", smallest);

// Task 11 – Logical Operators
let userAge = 20;
let hasID = true;
let isStudent = false;

if (userAge >= 18 && hasID) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Task 12 – Ternary Operator
let score = 70;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result);

// Task 13 – Data Type Coercion
console.log("5" + 2);    // "52"
console.log("5" - 2);    // 3
console.log(true + 1);   // 2
console.log(false + 10); // 10

// Task 14 – Dialogue Boxes
let userName = prompt("Enter your name");

alert(`Hello ${userName}, welcome to JavaScript!`);

// Task 15 – Loop + Condition
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Task 16 – User Defined Function
function calculateArea(width, height) {
  return width * height;
}

console.log("Area =", calculateArea(5, 10));

// Task 17 – Default Parameters
function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser();
greetUser("Zeyad");

// Task 18 – String Methods
let message = " hello javascript world ";

let trimmed = message.trim();
let upper = trimmed.toUpperCase();
let contains = trimmed.includes("javascript");

console.log(trimmed);
console.log(upper);
console.log(contains);

// Task 19 – Array Methods
let nums = [10, 20, 30, 40];

nums.push(50);
nums.shift();

console.log(nums);
console.log(nums.length);

// Task 20 – Date Object
let today = new Date();

console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day:", today.getDate());