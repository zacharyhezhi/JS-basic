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
//iterate exceptArray
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

//Object Equality
//Check if two objects's properties are equal
function areEqual(address1, address2){
    return address1.street === address2.street &&
            address1.city === address2.city &&
            address3.zipCode === address3.zipCode;
}
//Check if two objects refer to the same object
function areSame(address1, address2){
    return address1 === address2;
}
let address4 = address3;

console.log(areEqual(address2, address3));
console.log(areSame(address2, address3));
console.log(areSame(address3, address4));

//Blog Post Object

let Post = {
    title: 'Love',
    body: 'Love Story',
    author: 'Zachary',
    views: 10,
    comments: [
        {author: 'Jeni',body: 'good'},
        {author: 'Jery',body: 'good'},
    ],
    isLive: true
}
console.log(Post);

//Constructor Functions for Post Object
function CreatePost(title, body, author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}
let Post1 = new CreatePost(a, b, c);
console.log(Post1);

//Price Range Object
let priceRange = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, MaxPerPerson: 10},
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, MaxPerPerson: 20},
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, MaxPerPerson: 30},
]

//Arrays
//Adding Elements
const numbers = [3, 4];

//End
numbers.push(5, 6);

//Beginning
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0 , "a", "b");
console.log(numbers);

//Finding Elements (Primitives)
const numbers1 = [1, 2, 3, 4, 7, 1];
//search for 1 true return index, false return -1 ,syntax alert: indexOf
console.log(numbers1.indexOf(1));
//search from index 2 for number 1
console.log(numbers1.indexOf(1,2));
console.log(numbers1.lastIndexOf(1));
//check if the number is in the array
console.log(numbers1.indexOf(1) !== -1);
//Consice syntax 
console.log(numbers1.includes(1));

//Finding Elements (Reference Types)
const courses = [
    {id: 1, name: 'a'},
    {id: 1, name: 'a'},
]

//Reference type can not be checked by equal
console.log(courses.includes({id: 1, name: 'a'}));

//Find method
const course = courses.find(function(course){
    return course.name === 'a';
});
console.log(course);

//Find method index
const course1 = courses.findIndex(function(course){
    return course.name === 'a';
});
console.log(course1);

//Arrow Functions
const course3 = courses.find(course => course.name === 'a');
console.log(course3);

//Removing Elements
const numbers5 = [1, 2, 3, 4, 5];
//End
const last = numbers5.pop();
//Start
const first = numbers5.shift();
//Middle
numbers5.splice(2, 1);

// Emptying an Array
let numbers6 = [1, 2, 3, 4];
let another6 = numbers6;

//solution 1, if you have another reference to this array, then it will not empty the array
numbers6 = []
console.log(numbers6);
console.log(another6);

//solution 2 work perfectly
numbers6.length = 0;

//solution 3 work but redundancy
numbers6.splice(0, numbers6.length); 

// Combining and Slicing Arrays
const first6 = [1, 2, 3];
const second6 = [4, 5, 6];
const combined = first6.concat(second6);
const slice = combined.slice(2, 4);
console.log(combined);
console.log(slice);

//Reference type :copy the reference, not the value
const first7 = [{id: 1}];
const combined2 = first7.concat(second6);
first7[0].id = 10;
console.log(combined2);

//The Spread Operator
const combined3 = [...first6, 'a', ...second6, 'b'];
//copy array
const combined4 = [...first6];
first6.pop();
console.log(first6);
console.log(combined4);

//Iterating an Array
const numbers8 = [1, 2, 3];
for(let number of numbers8){
    console.log(number);
}

numbers8.forEach((number,index) => console.log(index, number));

// Joining Arrays
const joined = numbers8.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);
//Used in URL
const combined9 = parts.join('-');
console.log(combined9);


//Sorting Arrays
const numbers9 = [2, 3, 1];
numbers9.sort();
console.log(numbers9);
numbers9.reverse();
console.log(numbers9);

//Sorting object
const course2 = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javaScript'}
];
//ACSII code
course2.sort(function(a, b){
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(course2);

//Testing the Elements of an Array
const numbers7 = [1, -1, 2, 3];
//every() : check all elements until it's false, it break
const allPositive = numbers.every(function(value){
    return value >= 0;
});
console.log(allPositive);
//some() : check if at least one element satisfy the requirement, then it break
const atLeastOnePositive = numbers.some(function(value){
    return value >= 0;
});
console.log(atLeastOnePositive);

//Filtering an Array
const numbers10 = [1, -1, 2, 3];
const filtered = numbers10.filter(n => n >= 0);
console.log(filtered);

// Mapping an Array
const items =  filtered.map(n => '<li>' + n + '</li>');
const html ='<ul>' + items.join('') + '</ul>';
console.log(html);

//Mapping an object, chaining the maps
const items2 = numbers10
    .filter(n => n >= 0)
    .map(n => ({ value: n })) // ES6 retrun object, add()
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items2);

//Reducing an Array
const sum2 = numbers10.reduce(
    (accumulator , currentValue) => accumulator + currentValue
    );
console.log(sum2);

//Exercise 1- Array from Range
const numbers11 = arrayRangeFrom(0, 4);
console.log(numbers11);

function arrayRangeFrom(min, max){
    let array = [];
    for(let i = min; i <= max; i++){
        array.push(i);
    }
    return array;
}

//Exercise 2- Includes
const include = includeNumber(numbers11, 7);
console.log(include);

function includeNumber(array, searchElement) {
    for(let i of array) {
        if( i === searchElement)
            return true;
    }
    return false;
}

//Exercise 3- Except
const numbers12 = [1, 2, 3, 4, 1, 1];
const except = exceptNumber(numbers12, 1);
console.log(except);

function exceptNumber(array, exclude){
    exceptArray = [];
    for(let i of array){
        if (i !== exclude)
            exceptArray.push(i);
    }
    return exceptArray;
}

//Exercise 4- Moving an Element
const numbers13 = [1, 2, 3, 4, 1, 1];
const outputMove = move(numbers13, 1, 2);
console.log(outputMove);

function move(array, index, offset){
    let output = [...array];
    let number = output[index];

    output.splice(index, 1);
    let moveIndex = index + offset;
    if (moveIndex <= output.length && moveIndex >= 0){
        output.splice(moveIndex, 0, number);
        return output;
    }   
    else console.error('Invalid Offset.');
}

//Exercise 5- Count Occurrences
const count3 = countOccurrences(numbers13, 1);
console.log(count3);

function countOccurrences(array, number){
    let sum = 0;
    for(let i of array){
        if (i === number)
            sum++;
    }
    return sum;
}

//reduce method
function countReduce(array, number){
   return array.reduce((accumulator, current) => {
        const occurrence = (current === number)? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

const count4 = countReduce(numbers13, 1);
console.log(count4);

//Exercise 6- Get Max
function getMax(array){
    return array.reduce((a, b) => {return (a>b)? a : b});
}

numbers14 = [1, 2, 3, 4]
const max1 = getMax(numbers14);
console.log(max1);

//Exercise 7- Movies
const movies = [
    { title: 'a', year: '2018', rating: 4.5},
    { title: 'b', year: '2018', rating: 4.7},
    { title: 'c', year: '2018', rating: 3},
    { title: 'd', year: '2017', rating: 4.5}
];
// All the movie in 2018 rating > 4
// Sorting by rating
// Descending order
// Pick their title

const titles = movies
    .filter(m => m.year === '2018' && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log(titles);

//Function Declarations vs Expressions
//Function declaration

walk()// You can call the function using function declaration because of hoisting
function walk(){
    console.log('walk');
}

//Function expressions
//run() you can not call the function when it is using let const
const run = function(){
    console.log('run');
}
let move1 = run;
run();
move1();

//Arguments
function sum3(){
    let total = 0;
    for( let value of arguments)//arguments are an object with iterator(index from 0), so it can iterated
        total += value;
    return total;
}
let total = sum3(1,2,3,4,5)
console.log(total);

//The Rest Operator
function sum4(...args){//args now transfer to an array, so it can use reduce, and it must the last parameter
    return args.reduce((a,b) => a + b);
}
total1 = sum4(1,2,3)
console.log(total1);

//Default Parameters
function interest( principle, rate, years = 5){// put the default parameters at the last of the parameters
    return principle * rate * years;
}
console.log(interest( 100000, 3.5));