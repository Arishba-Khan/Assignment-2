#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number:'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number:'
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the operator you want to perform:',
        choices: ['Add', 'Subtarct', 'Multiply', 'Divide']
    }
]);
var result;
switch (answer.operator) {
    case 'Add':
        result = answer.num1 + answer.num2;
        console.log("The answer is " + result);
        break;
    case 'Subtract':
        result = answer.num1 - answer.num2;
        console.log("The answer is " + result);
        break;
    case 'Multiply':
        result = answer.num1 * answer.num2;
        console.log("The answer is " + result);
        break;
    case 'Divide':
        result = answer.num1 / answer.num2;
        console.log("The answer is " + result);
        break;
}
