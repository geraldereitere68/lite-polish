/* 
Filename: complexJavaScriptCode.js
Content: Sophisticated and elaborate code showcasing various concepts and techniques in JavaScript
*/

// Define a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create some instances of Person class
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);

// Call introduce() method on each person
person1.introduce();
person2.introduce();

// Define a custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Try throwing and catching the custom error
try {
  throw new CustomError("Something went wrong!");
} catch (error) {
  console.error(error);
}

// Define a function to calculate factorial recursively
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Call the factorial function and log the result
console.log(factorial(5));

// Define a higher-order function to generate square functions
function generateSquareFunction() {
  return function (n) {
    return n * n;
  };
}

// Use the higher-order function to create a square function
const square = generateSquareFunction();
console.log(square(4));

// Implement a simple async function using Promises
function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function asyncHello() {
  console.log("Hello");
  await wait(1000); // Pause execution for 1 second
  console.log("World");
}

// Call the async function
asyncHello();

// Define an object using object literal syntax
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2021,
  getFullDescription() {
    return `${this.year} ${this.brand} ${this.model}`;
  },
};

// Access object properties and call methods
console.log(car.brand);
console.log(car.getFullDescription());

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use array methods like map and reduce
const squaredNumbers = numbers.map((n) => n * n);
const sumOfSquares = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfSquares);

// Define a closure to create a counter function
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

// Create two counter functions
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1

// ... More lines of sophisticated and complex code ...

// ... Add various code snippets showcasing advanced JavaScript concepts ...

// ... Continue adding more lines of elaborate code ...

console.log("End of complex code");