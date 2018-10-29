const readline = require('readline-sync');

console.log('Welcome to calculator!');
console.log('========================');

//input first number
console.log('Please enter your first number');
const firstresponse = readline.prompt();
const firstnumber = parseInt(firstresponse,10);

/*specify what to do with the numbers?
console.log('What would you like to do? Type add, minus, multiply, divide');
const action = readline.prompt();

if (action=='add') {let ADD = '+'
    
    } else if (action=='minus') {let MINUS = '-'
    } else if (action=='multiply') {
    } else if (action=='divide') {let DIVIDE = '/'}
*/

//input second number
console.log('Please enter your second number')
const secondresponse = readline.prompt();
const secondnumber = parseInt(secondresponse,10);

//display answer
const answer = firstnumber + secondnumber;
console.log('The answer is ' + answer);