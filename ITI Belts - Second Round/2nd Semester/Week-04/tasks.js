// Task 1
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());


// Task 2
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial 5 =", factorial(5));
console.log("Factorial 3 =", factorial(3));


// Task 3
function memoizedFactorial() {
  let cache = {};

  return function factorial(n) {
    if (n in cache) {
      console.log("From cache");
      return cache[n];
    }

    if (n === 0 || n === 1) return 1;

    let result = n * factorial(n - 1);
    cache[n] = result;
    return result;
  };
}

let fastFact = memoizedFactorial();

console.log("Memo 5 =", fastFact(5));
console.log("Memo 5 again =", fastFact(5));


// Task 4
function Person(name, age) {
  this.name = name;
  this.age = age;

  // 4.2 method
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

let p1 = new Person("Zeyad", 20);
console.log(p1.name, p1.age);
p1.greet();


// Task 4.3
function Person2(name, age) {
  this.name = name;
  this.age = age;
}

Person2.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let p2 = new Person2("Ahmed", 22);
let p3 = new Person2("Ali", 25);

p2.greet();
p3.greet();

console.log(p2.greet === p3.greet);

// Task 5
function createUser(config) {
  if (config.type === "Admin") {
    return {
      name: config.name,
      manageUsers() {
        console.log(`${this.name} is managing users.`);
      }
    };
  }

  if (config.type === "Guest") {
    return {
      name: config.name,
      viewContent() {
        console.log(`${this.name} is viewing content.`);
      }
    };
  }
}

// Admin
let adminUser = createUser({ type: "Admin", name: "Zeyad" });
adminUser.manageUsers();

// Guest
let guestUser = createUser({ type: "Guest", name: "Ahmed" });
guestUser.viewContent();