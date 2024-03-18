"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Equality with strings
var fruit = "Apple";
console.log("Testing with equality and inequality");
console.log(fruit == "Apple"); //true
console.log(fruit == "apple"); //false
// LowerCase function
console.log("Testing lower case function");
console.log(fruit.toLowerCase() == "apple"); //true
console.log(fruit.toLowerCase() == "Apple"); //false
//Numerical test
var num = 28;
console.log("Testing numerical functions");
console.log(num > 25); //true
console.log(num < 20); //false
console.log(num != 28); //true
console.log(num == 30); //false
