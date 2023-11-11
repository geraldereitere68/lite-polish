/*
 * Filename: complex_app.js
 * Description: Demonstrates a complex JavaScript application with multiple modules and functionality.
 * Author: John Doe
 * Date: December 15, 2021
 */

// Utility module for mathematical calculations
const MathUtils = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  
  return {
    add,
    subtract,
    multiply,
    divide
  };
})();

// User module for user-related functions
const UserModule = (() => {
  let users = [];

  const addUser = (user) => {
    users.push(user);
  };

  const getUsers = () => {
    return [...users];
  };

  return {
    addUser,
    getUsers
  };
})();

// Product module for managing products
const ProductModule = (() => {
  let products = [];

  const addProduct = (product) => {
    products.push(product);
  };

  const getProducts = () => {
    return [...products];
  };

  return {
    addProduct,
    getProducts
  };
})();

// UI module for user interface related functions
const UIModule = (() => {
  const displayUsers = () => {
    const users = UserModule.getUsers();
    users.forEach((user) => {
      console.log(`User: ${user.name}, Age: ${user.age}`);
    });
  };

  const displayProducts = () => {
    const products = ProductModule.getProducts();
    products.forEach((product) => {
      console.log(`Product: ${product.name}, Price: ${product.price}`);
    });
  };

  return {
    displayUsers,
    displayProducts
  };
})();

// Main app module for initializing and using other modules
const App = (() => {
  const init = () => {
    UserModule.addUser({ name: 'John Doe', age: 25 });
    UserModule.addUser({ name: 'Jane Smith', age: 30 });
    ProductModule.addProduct({ name: 'Smartphone', price: 599 });
    ProductModule.addProduct({ name: 'Laptop', price: 1099 });
  };

  const run = () => {
    UIModule.displayUsers();
    UIModule.displayProducts();
  };

  return {
    init,
    run
  };
})();

// Initialize the app and run it
App.init();
App.run();