const readline = require('readline-sync');

console.log('Welcome to calculator!');
console.log('========================');

//input first number
console.log('Please enter your first number');
const firstresponse = readline.prompt();
const firstnumber = parseFloat(firstresponse,10);

//specify what to do?
console.log('What would you like to do? Input: +, -, *, /');
const action = readline.prompt();

//input second number
console.log('Please enter your second number')
const secondresponse = readline.prompt();
const secondnumber = parseFloat(secondresponse,10);

let answer;

switch (action) {

    case '+':
        answer = firstnumber + secondnumber;
        break;
    
    case '-':
        answer = firstnumber - secondnumber;
        break;

    case '*':
        answer = firstnumber * secondnumber;
        break;
    
    case '/':
        answer = firstnumber / secondnumber;
        break;
                }

//display answer
console.log('The answer is ' + answer);