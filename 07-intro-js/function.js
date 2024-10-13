/*function greet(fullName) {
    
    return `Hello ${fullName} and welcome to my website`;
}

console.log(greet("Joseph Cruz"));
console.log(greet("John Doe"));
*/

/*
const CelsiusToFahrenheit = celsius => `The temperature in Fahrenheit is ${(celsius * 9 / 5) + 32}F`;

console.log(CelsiusToFahrenheit(prompt("Enter your temperature in Celsius")));
*/


const discount = (spent) => spent<=200 && spent >= 0? `The total is ${spent}`:spent >= 201 && spent <= 500? `The total is ${spent - (spent * .1)}`: spent >= 501 && spent <= 1000? `The total is ${spent - (spent * .2)}`: spent >= 1001? `The total is ${spent - (spent * .3)}`:"Please enter a non negative number";

console.log(discount(prompt("Enter your spent amount")));