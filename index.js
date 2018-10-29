const readline = require('readline-sync');

console.log('Welcome to calculator!');
console.log('========================');

//specify what to do
console.log('What would you like to do? Input: +, -, *, /');
const action = readline.prompt();

//find out how many
console.log('How many numbers do you want to ' + action);
const HowMany = readline.prompt();
const ThisMany = parseFloat(HowMany,10);

//create an array, get it to add an array with ThisMany iterations
let array = Array(ThisMany);
for (var i = 0; i<array.length; i++) {
    array[i] = Prompt('Please input number ' + (i+1));
}

function Prompt(PromptString) {
    console.log(PromptString);
    const UserInput = readline.prompt();
    return UserInput;
}

/*input first number
console.log('Please enter your first number');
const firstresponse = readline.prompt();
const firstnumber = parseFloat(firstresponse,10);

input second number
console.log('Please enter your second number');
const secondresponse = readline.prompt();
const secondnumber = parseFloat(secondresponse,10);*/

let answer;

switch (action) {

    case '+':
        answer = 0;
        for (let i = 0; i < array.length; i++) {
            answer += parseFloat(array[i], 10);
        }
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

    default:
        console.log('Your input was not recognised. Please try again.')
}

//display answer
if (answer) {
    console.log('The answer is ' + answer)
} else {
    console.log('Incorrect Data?')
}