 
//1. every()
//Question 1:
//Create an array [10, 20, 30, 40]. Check if every number is less than 50.

const array = [10, 20, 30, 40];
const isBelowThreshold = ((num) => num < 90);
console.log(array.every(isBelowThreshold));

//Question 2:
//Create an array [18, 22, 25, 16, 30]. Check if every student is eligible to vote (age >= 18).

const array = [18, 22, 25, 16, 30];
const eligible = array.every ((num) => num >= 18);
console.log(eligible);



//2. fill()
//Question 1:
//Create an array [1, 2, 3, 4, 5]. Replace all elements with 0 using fill().

const array = [1, 2, 3, 4, 5];
array.fill(0);
console.log(array);

//Question 2:
//Create an array ["A", "B", "C", "D", "E"]. Replace only "B" and "C" with "X" using fill().

const array = ["A", "B", "C", "D", "E"];
console.log (array.fill("x" ,1 ,3));



//3. findLast()
//Question 1:
//Create an array [12, 45, 78, 23, 90, 34]. Find the last number greater than 50.

const array = [12, 45, 78, 23, 90, 34];
const greater = array.findLast((ele) => ele > 50);
console.log(greater);


//Question 2:
//Create an array [5, 8, 11, 14, 17, 20]. Find the last even number.

const array = [5, 8, 11, 14, 17, 20];
const evennumber = array.findLast((ele) => ele % 2 ===0);
console.log(evennumber);



//4. findLastIndex()
//Question 1:
//Create an array [10, 20, 30, 40, 50, 60]. Find the index of the last number greater than 35.

const array  = [10, 20, 30, 40, 50, 60];
const greater = array.findLastIndex((ele) => ele > 35 );
console.log(greater);


//Question 2:
//Create an array [1, 3, 5, 8, 7, 10]. Find the index of the last even number.


const array  = [1, 3, 5, 8, 7, 10];
const evennumber = array.findLastIndex((ele) => ele % 2 ===0 );
console.log(evennumber);


//5. includes()
//Question 1:
//Create an array ["HTML", "CSS", "JavaScript"]. Check whether "React" exists in the array.

const array = ["HTML", "CSS", "JavaScript"];
const check = array.includes("React");
console.log(check);

//Question 2:
//Create an array [100, 200, 300, 400]. Check whether 300 exists in the array.

const array = [100, 200, 300, 400];
const check = array.includes(300);
console.log(check);


//6. join()
//Question 1:
//Create an array ["Virat", "Rohit", "Rahul"]. Join all names using " | " as the separator.

const array = ["Virat", "Rohit", "Rahul"];
console.log(array.join(" | "));


//Question 2:
//Create an array ["M", "E", "R", "N"]. Join all letters without any separator to form a word.

const letters = ["M", "E", "R", "N"];
console.log(letters.join(""));



//7. lastIndexOf()
Question 1:
Create an array ["apple", "banana", "apple", "orange", "apple"]. Find the last index of "apple".

const fruits = ["apple", "banana", "apple", "orange", "apple"];
const lastIndexOf = fruits.lastIndexOf("apple");
console.log(lastIndexOf);


//Question 2:
//Create an array [10, 20, 30, 20, 40, 20]. Find the last index of 20.


const array = [10, 20, 30, 20, 40, 20];
const lastIndexOf = array.lastIndexOf(20);
console.log(lastIndexOf);


//8. reverse()
//Question 1:
//Create an array [1, 2, 3, 4, 5]. Reverse the array and print it.

const array = [1, 2, 3, 4, 5];
console.log(array.reverse());


//Question 2:
//Create an array ["HTML", "CSS", "JavaScript"]. Reverse the order of technologies.

const array = ["HTML", "CSS", "JavaScript"];
console.log(array.reverse());


//9. slice()
//Question 1:
//Create an array ["A", "B", "C", "D", "E"]. Extract "C" and "D" using slice().

const array = ["A", "B", "C", "D", "E"];
console.log(array.slice(2,4));


//Question 2:
//Create an array [10, 20, 30, 40, 50, 60]. Extract the last three elements using slice().

const array =  [10, 20, 30, 40, 50, 60];
console.log(array.slice(3,6));


//10. splice()
//Question 1:
//Create an array ["Jan", "Mar", "Apr"]. Insert "Feb" at the correct position using splice()

const  array = ["Jan", "Mar", "Apr"];
array.splice(1,0,"feb");
console.log(array);


//Question 2:
//Create an array ["HTML", "CSS", "PHP"]. Replace "PHP" with "JavaScript" using splice().

const lang = ["HTML", "CSS", "PHP"];
lang.splice(2,1,"Javascript");
console.log(lang);


//11. toString()
//Question 1:
//Create an array [1, 2, 3, 4, 5]. Convert the array into a string using toString().

const numbers = [1, 2, 3, 4, 5];
const str = numbers.toString();
console.log(str)


//Question 2:
//Create an array ["HTML", "CSS", "JavaScript"]. Convert it into a string and print the result.

const lang = ["HTML", "CSS", "JavaScript"];
console.log(lang.toString());