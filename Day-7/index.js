// push
// pop
// shift
// unshift
// map
// filter
// reduce
// foreach
// at
// concat
// find
// findIndex
// every 






 //every
const isBelowThreshold =(num) => num < 60 ;
const array = [23, 34, 56, 12, 32];
console.log(array.every(isBelowThreshold));


// fill

const numbers = [1, 2, 3, 4];
console.log(numbers.fill(0,1,3));
console.log(numbers.fill(6,0,4));
console.log(numbers.fill("hello"));

//find last

const numbers = [12, 34, 56, 88, 334, 65];
const lastElementWhoPassedCondition = numbers.findLast((ele) => ele >80 );
console.log(lastElementWhoPassedCondition);

// find last index

const numbers = [12, 34, 56, 88, 334, 65];
const lastElementWhoPassedConditionIndex = numbers.findLastIndex((ele) => ele > 50);
console.log(lastElementWhoPassedConditionIndex);


//includes

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));


// join

const students = ["Virat", "Rohit", "Rahul"];
console.log(students.join());
console.log(students.join(""));
console.log(students.join("-"));
console.log(students.join(" "));

//last indeex of 

const animals = ["cat", "cat", "dog", "mouse", "cat"];
console.log(animals.lastIndexOf("dog"));



// reverse 

const numbers = ["one", "two", "three"];
console.log(numbers);
const reversed = numbers.reverse();
console.log(reversed);


//  slice

const animals = ["cat", "dog", "mouse", "ant", "elephant"];
console.log(animals.slice(2,5));
console.log(animals.slice(2,-1));
console.log(animals.slice(-1));


//  splice

const months = ["jan", "march", "may", "june"];

months.splice(1,0,"feb");
months.splice(3,0,"april");
months.splice(0,0,"start");

console.log(months);


//  to string


const months = ["jan", "march", "may", "june"];
console.log(months.toString());




