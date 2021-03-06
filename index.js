const readline = require('readline-sync');

console.log('Welcome to calculator!');
console.log('========================');

//specify what to do
console.log('What would you like to do? Input: +, -, *, /');
const action = readline.prompt();

//find out how many
console.log('How many numbers do you want to ' + action + ':');
const HowMany = readline.prompt();
const ThisMany = parseFloat(HowMany,10);

//create an array, get it to add an array with ThisMany iterations
let array = Array(ThisMany);
for (let i = 0; i<array.length; i++) {
    array[i] = Prompt('Please input number ' + (i+1));
}

function Prompt(PromptString) {
    console.log(PromptString);
    const UserInput = readline.prompt();
    return UserInput;
}

let answer;

switch (action) {

    case '+':
        answer = 0;
        for (let i = 0; i < array.length; i++) {
            answer += parseFloat(array[i], 10);
        }
        break;
    
    case '-':
        answer = array[0];
        for (let i = 1; i < array.length; i++) {
            answer -= parseFloat(array[i], 10);
        }
        break;

    case '*':
        answer = 1;
        for (let i = 0; i < array.length; i++) {
            answer *= parseFloat(array[i], 10);
        }
        break;
    
    case '/':
        answer = array[0];
        for (let i = 1; i < array.length; i++) {
            answer /= parseFloat(array[i],10);
        }
        break;

    default:
        console.log('Your input was not recognised. Please try again.')
}

//display answer
if (answer) {
    console.log('The answer is ' + answer)
} else {
    console.log('Incorrect Data?')
    console.log(answer)
}