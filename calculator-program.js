const ask = require('readline-sync');
let newCalculation;
let numbers = [3, 78, -12, 0.5, 27];

// Scenario: You are building a calculator for an online math game. The
// calculator must include functionality to perform the following:
// ● Absolute Value Calculation: Given any number, return its absolute
// value.
function findAbsoluteValue(a) {
    return Math.abs(a);
}
// ● Power Calculation: Calculate and return the value of a base raised to
// a specific power.
function raiseToPowerOf(base, exponent) {
    return Math.pow(base, exponent);
}

// ● Square Root Finder: Calculate the square root of a number.
function calculateSquareRoot(a) {
    return Math.sqrt(a);
}
// ● Maximum and Minimum Finder: From a given set of numbers,
// determine the largest and smallest values.
function findMaxAndMin(arr) {
    let values = [Math.min(...arr),  Math.max(...arr)]
    return (values);
}
console.log(findMaxAndMin(numbers));
// ● Random Number Generator: Generate a random integer within a
// specified range.
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
// ● Custom Rounding: Round a number to a specified number of decimal
// places.

function roundTo(num, decimal) {
    let factor = raiseToPowerOf(10, decimal)
    return Math.round(num * factor) / factor
}

/***
 1. Write a function for each operation listed above using the Math
module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50.

 */


while (true) {
    // Ask user to select an operation
    let operation = Number(ask.question(`Enter the number representing the calculation you would like to perform
    1) Find the absolute value of a number
    2) Calculate a base number to a specific power
    3) Find the square root of a number
    4) Find the maximum and minimum numbers in a list of numbers
    5) Get a random number within a range
    6) Round a number to a specific decimal point

`));

    if (operation === 1) {
        let a = ask.question(`Enter a number to find its absolute value: `)
        console.log(`The absolute value of ${a} is: ${findAbsoluteValue(a)}`);
    } else if (operation === 2) {
        let base = ask.question(`Enter your base number: `);
        let exponent = ask.question(`Enter your exponent: `)
        console.log(`${base} to the power of ${exponent} is ${raiseToPowerOf(base, exponent)}`);
    } else if (operation === 3) {
        let sqrt = ask.question(`Enter a number to find its square root: `);
        console.log(`The square root of ${sqrt} is: ${calculateSquareRoot(sqrt)}`)
    } else if (operation === 4) {
        let numberArray = ask.question(`Enter several numbers to find the minimum and maximum number in the list. When all numbers have been entered, press the "Enter" or "Return" key
`).split(" ");
        console.log(`The minimum and maximum numbers are:  ${findMaxAndMin(numberArray)}`)

    } else if (operation === 5) {
        let min = ask.question(`Enter the minimum number for the range: `);
        let max = ask.question(`Enter the maximum number for the range: `);
        console.log(`Your random number is: ${getRandomNumber(min, max)}`);
    } else {
        let num = ask.question(`Enter the number you wish to round: `);
        let decimal = ask.question(`Enter the decimal you want to round it to: `);
        console.log(`${num} rounded ${decimal} decimal points is ${roundTo(num, decimal)}`);
    }

    newCalculation = ask.question(`\nWould you like to do another calculation? Y or N: `)

    if (newCalculation === "N" || newCalculation === "n") {
        return false
    }
}