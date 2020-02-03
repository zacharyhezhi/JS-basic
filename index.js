//This is my first Javasript code.
console.log('Hello World');
let firstName = 'Zachary', secondName = "He";
console.log(firstName, secondName);

let person = {
    name: 'zachary',
    age: 30
};
console.log(person);

let selectedColor = ['red','blue'];
selectedColor[2] = 1;
console.log(selectedColor.length);


//Performing a task
function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');

//Calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));


//If a consumer has more than 100 points,
//They are golden consumer,
//Otherwise they are silver consumer.

let point = 100;
let type = point > 100 ? 'gold' : 'silver';
console.log(type);

//logical operator

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

//Logical Operators with Non-booleans,
//Determin color by user's choice or default color.
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

//Swapping Variables
let a = 'blue';
let b = 'red';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

//If the hour is between 6am and 12am: Good Morning!
//If it is between 12pm and 6pm: Good Afternoon!
//Otherwise: Good evening!
let hour = 12;

if (hour >= 6 && hour <12) {
    console.log('Good Morning!');
}

else if (hour >= 12 && hour < 18) 
    console.log('Good Afternoon!');


else {
    console.log('Good evening!');
}

//Swich case
let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('moderator');
        break;
    default:
        console.log('Unknown user');
}

//for loop
for( let i = 0; i < 5; i++) {
    if (i % 2 == 0)
        console.log(i);
}

//while loop
// let i = 0;
// while (i < 5) {
//     if (i %2 !== 0)
//         console.log('while loop' + i);
//     i++;
// }

// do while loop will excute no mattter if the condition satisfies
let i = 0;
do {
    if (i %2 !== 0)
        console.log('do while loop' + i);
    i++;
} while (i < 5)


//for in loop
//property of object
const people = {
    name: 'zachary',
    age: 20
};

for (let key in people) {
    console.log(key, people[key]);
};

//for of loop
//iterate array
const colors = ['red', 'green', 'purple'];

for(let color of colors) {
    console.log(color);
}