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

//Return the maximum number of two
function max(i, j) {
    return (i > j) ? i : j;
};
let maxNumber = max (3, 3);
console.log(maxNumber);

//Landscape
function Landscape(width ,height) {
    return (width > height);
}
let land = Landscape (12, 10);
console.log(land);

//FizzBuzz
//Divisible by 3 -> Fizz,
//Divisible by 5 -> Buzz,
//Divisible by both 3 and 5 -> FizzBuzz,
//Not divisible by both 3 or 5 -> input,
//Not a number -> 'Not a number'.

const output = fizzBuzz(3);
console.log('output',output);
// function fizzBuzz(i) {
//     if (!Number.isInteger(i)) {
//         return "Not a number";
//     } 
//     else if (i % 3 === 0) {
//         if (i % 5 === 0) {
//             return 'FizzBuzz';
//         }
//         else {
//             return 'Fizz';
//         }
//     }
//     else if  (i % 5 === 0) {
//         return 'Buzz';
//     }
//     else return i;
// }

//reference answer 
function fizzBuzz(input) {
    if (typeof input !== "number") {
        return NaN;
    }
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0) 
        return 'Fizz;';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}

//Demerit Points
//speed limit = 70
//5 exceed -> 1 point 
//Math.floor(1.3) = 1
//12 points -> suspended

let license = demeritPoints(70);
console.log('Demerit Points ' + license);

function demeritPoints (speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) 
        return 'OK';
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            return 'suspended';
        }
        else 
            return points + ' points';
    }
}

//Even and Odd Numbers
showNumbers(11);
// console.log('result ' + result);
function showNumbers(limit) {
    let i = 0;
    while (i <= limit) { 
        let evenOrOdd = (i % 2 == 0) ? 'even' : 'odd';
        console.log(i + evenOrOdd);
        i++;
    }
}

//Count Truthy
function countTruthy(array) {
    let count = 0;
    for (let i of array) {
        if (i)
            count++;
    }
    return count;
}
let count = countTruthy([0, null, '', false, 3, 4])
console.log(count);

//String Properties
function showProperties(object) {
    for (let key in object) {
        if (typeof object[key] == 'string') {
            console.log(key, object[key]);
        }
    }
}

object1 = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(object1);

//Sum of Multiples of 3 and 5
function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }

    return sum;
}
console.log(sum(12));

//Grade
function calculateGrade(marks) {
    let sum = 0;
    for (let i of marks) {
        sum += i;
    }
    let grade = sum / marks.length;
    if (grade >= 1 && grade <= 59) 
        return 'F';
    if (grade >= 60 && grade <= 69) 
        return 'D';
    if (grade >= 70 && grade <= 79) 
        return 'C';
    if (grade >= 80 && grade <= 89) 
        return 'B'; 
    if (grade >= 90 && grade <= 100) 
        return 'A';         
}

const marks = [80, 50, 0];
console.log(calculateGrade(marks));

//Stars
showStars(5);
function showStars(rows) {
    for (let i = 1;  i <= rows; i++) {
        pattern = '';
        for(let j = 0;  j < i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

//Prime Numbers
function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrimes(i)) {
            console.log(i);
        }
    }
}
function isPrimes(number) {
    for (let i = 2; i <= number - 1; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

showPrimes(37);

//Object-oriented programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};
circle.draw(); // method

//factory function 
//camel notation: oneTwoThree
function createCircle(radius) {
    return {
        radius,// radius: radius,
        draw() {
            console.log('draw');
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();
const circle2 = createCircle(2);
console.log(circle2);

//construct function 
//pascal notation: OneTwoThree
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle4 = new Circle(1);

//Dynamic nature of objects
const circleDynamic = {
    radius: 1
};
circleDynamic .color = 'yellow';
circleDynamic .draw = function() {};
delete circleDynamic .color;
delete circleDynamic .draw;
console.log(circleDynamic );

//Value type vs Reference Type

let number = 10;
function increase (number) {
    number++;
}
increase(number);
console.log(number);
//number does not change because increase(number)'s number is copied as value type, 
//its value is copied, but the memory is different

let obj = {value: 10};
function decrease(obj) {
    obj.value--;
}
decrease(obj);
console.log(obj);
//value changed because object is copied by reference, the memory is the same
//Once the value is changed, all referece pointed on this memory will change the value

//Enumerating Properties of an Object
const circle5 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
//main way to iterate object
for (let key in circle5) {
    console.log(key, circle5[key]);
};
//Object.keys() get the properties as an array
for (let key of Object.keys(circle5)) {
    console.log(key);
};
//Object.entries() get each value pair as an array
for (let entry of Object.entries(circle5)) {
    console.log(entry);
};
//Check if the property is in the object
if ('radius' in circle5) console.log('yes');

//Cloning an Object
const circle6 ={
    radius: 1,
    draw() {
        console.log('draw');
    }
}

//traditional way
const another = {};
for (let key in circle6) 
    another[key] = circle6[key];

//Object.assign()
const another2 = Object.assign({
    color: "yellow",
}, circle6);

//Spreading method
const another3 = { ...circle6};


console.log(another);
console.log(another2);
console.log(another3);

//String
//String primitive 
const messesage = ' This is my first message ';
//String object
const another4 = new String('hi');  
console.log(another4.length);

//Template Literals ES6
//${} place holder function value can be used in this
const name = 'John';
const another5 = 
`Hi, ${name} ${3+2} 
Regards
Zac.
`;
console.log(another5);

//Date
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);
now.setFullYear(2017);
now.getDate();
now.toDateString();
now.toTimeString();
now.toISOString();// The most common way to communicate with the backend.


//Address Object
let Address1 = {
    street: 'high street',
    city: 'Sydney',
    zipCode: '2055'
};

function showAddress(Address){
    for (let key in Address){
        console.log(`${key}:`, Address[key]);
    };
} 

showAddress(Address1);

//Factory function
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

let address2 = createAddress('a', 'b','c');
console.log(address2);

//Constructor Functions
function Address(street, city, zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}
let address3 = new Address('a','b','c');
console.log(address3);
