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
