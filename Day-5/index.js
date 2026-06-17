// push method //

var students  = [];
console.log(students);
students.push("omkar");
students.push("nilesh");
students.push("chirag");
console.log(students);
console.log(students[1]);


// pop method //

var numbers = [1,2,3,4];
const lastElement = numbers.pop();
const secondlastElement = numbers.pop();
console.log(numbers,lastElement,secondlastElement);


// shift method //

const  numbers = [1,2,3,4,5];
const firstElement = numbers.shift();
console.log(numbers,firstElement);


//  unshift method //

const numbers = [1,2,3,4,5];
numbers.unshift(0);
numbers.unshift(6);
console.log(numbers);


// map method //

const products = [100,500,1000];
const gstIncludedPrice = products.map((price) => price * 1.18);
console.log(gstIncludedPrice);


const cart = [200,100,50];
const taxPrice = cart.map((price) => price * 1.08);
console.log(taxPrice);


//filter method //

const numbers = [1,2,3,4,5,6,7,8,9];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);


const studentsData = [
    { name:"omkar", active: true },
    { name:"nilesh", active: false },
    { name:"chirag", active: true },
];

const activePlayers = studentsData.filter((player) => player.active);
console.log(activePlayers,"activePlayers");


// Reduce method //

var numbers = [1,2,3,4,5];
const addition = numbers.reduce((acc, number ) => acc + number,0);
console.log(addition);


const cart = [100,300,5462];
const totalPrice = cart.reduce((acc,price) => acc + price,0);
console.log(totalPrice);



const numbers = [1, 6, 4, 5, 6, 7, 8, 3, 2, 4];
const totalElementsCount = numbers.reduce((acc) => acc + 1, 0);
console.log(totalElementsCount);


// condition ? true : false ;



const numbers = [3,6,10,2,64];
const max = numbers.reduce((acc,num) => (acc > num ? acc : num), 0);
console.log(max);


// for each //

const numbers = [1,2,3,4];
numbers.forEach((num) => console.log(num * 2));


// at method  //

const numbers = ["awdiz",2,3,4,5];
console.log(numbers.at(0));


// concat method //

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 =array1.concat(array2);
console.log(array3);




// find //

const numbers = [1,20,25,6,48,55,9];
const biggerThan = numbers.find((num) => num > 5);
console.log(biggerThan);

// findIndex method //

const number = [3, 4, 6, 7, 8, 3, 2, 5, 7, 434];
const output = number.findIndex((num) => num > 10);
console.log(output);