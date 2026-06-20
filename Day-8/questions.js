
//For Loop Practice Questions (10)
//Question 1

//Print numbers from 1 to 20 using a for loop.

for( let i = 1; i <= 20; i++) {
    console.log(i);
}

//Question 2
//Print numbers from 50 to 100.

for ( i=50; i<=100; i++){
    console.log(i);
}

//Question 3
//Print all even numbers between 1 and 50.

for(i = 1; i <= 50; i++ ){
    if(i % 2 == 0){
        console.log(i);
    }
}

//Question 4
//Print all odd numbers between 1 and 50.


for(i=1; i<=50; i++){
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//Question 5
//Find the sum of numbers from 1 to 100.

let sum = 0;
for(i=1;i<=100;i++){
    if(sum += i){
        console.log(sum);
    }
}



//Question 6
//Count how many numbers are divisible by 5 between 1 and 100.

let count = 0 ;
for( i=1;i<=100;i++){
    if( i % 5===0) {
        count++ ;
    }
}
console.log(count);

//Question 7
//Print the multiplication table of 7.

for( i=1;i<=10;i++){
     console.log(7*i);
}


//Question 8
//Print numbers from 20 to 1 in reverse order.

for(i=20;i>=1;i--){
    console.log(i)
}




//Question 9
//Find the total count of even and odd numbers between 1 and 200.

let evencount =0;
let oddcount =0;
for(i = 1; i <= 200; i++ ){
    if(i % 2 == 0){
        evencount++ ;
    }else {
        oddcount++ ;
    }
}
console.log(evencount);
console.log(oddcount);



//Question 10
//Print the square of numbers from 1 to 10.
//Example:

//1 -> 1
//2 -> 4
//3 -> 9


for(i=1;i<=10;i++){
 console.log(i*i);
}




//If-Else Practice Questions (10)
////Question 1

//Check if a number is even or odd.

let num = 6;

if(num % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}


//Question 2

//Check whether a person is eligible for a driving license:

//Age > 18 → Eligible
//Age == 18 → Learner License
//Age < 18 → Not Eligible

let age = 18;

if(age > 18){
    console.log("Eligible")
} else if(age == 18){
    console.log("Learner License")
}else if (age < 18){
    console.log("Not Eligible");
}


//Question 3
//Check whether a student has passed or failed:

//Marks >= 35 → Pass
//Marks < 35 → Fail


let marks = 37;
if( marks > 35){
    console.log("Pass");
}else if (marks < 35 ){
    console.log("Fail");
}


//Question 4
//Check whether a number is positive, negative, or zero.

let number = 0;
if(number > 0){
    console.log("Positive");
}else if(number < 0){
     console.log("negative");
}else if(number == 0){
     console.log("zero");
}



//Question 5
//Check whether a person can vote:

//Age >= 18 → Can Vote
//Otherwise → Cannot Vote

let age = 19 ;
if( age >= 18){
    console.log("can Vote");
}else{
    console.log("can not Vote");
}


//Question 6
//Check which number is greater between two numbers


let num1 = 45;
let num2 = 40;

if(num1 >  num2){
    console.log( num1 +  "greaterthan");
}else if(num1 > num2){
    console.log(num2 + "is greater");
}else {
    console.log("both are equal");
}


//Question 7
//Check whether a year is a leap year or not.
//(Hint: divisible by 4)

let year = 2026 ;

if((year % 4 === 0 &&  year % 100 !== 0  ) || year % 400 == 0){
    console.log("it is a Leap Year");
}else {
    console.log("is not a Leap Year")
}



//Question 8
//Check whether a user has completed an assignment.

//true → "Good Job!"
//false → "Please Complete It"
//Question 9
let iscompleted = false;
if(iscompleted ){
    console.log("Good Job");
}else{
    console.log("Please Complete It");
}


//Question 9
//Check whether a number is divisible by both 3 and 5.

let num = 32;

if(num % 3 === 0 && num % 5 === 0){
    console.log("Divisible by 3 & 5");
}else{
    console.log("not divisible by 3 & 5");
}



//Question 10
//Check whether a user can enter a movie:

//Age >= 18 → Entry Allowed
//Otherwise → Entry Denied


let age = 16;

if (age >= 18) {
    console.log("You can enter the movie");
} else {
    console.log("You cannot enter the movie");
}


//Question 1
//Create a switch statement for fruits:

//Apple
//Mango
//Banana
//Default: "Fruit Not Available"


let fruits = "pineapple";

switch (fruits){
    case "apple":
        console.log("apple");
        break;

        case "mango":
        console.log("available");
        break;

        case "banana":
        console.log("banana");
        break;
      
        default:
            console.log(" Fruits not available");
            break;

} 



//Create a switch statement for weekdays:

//Monday
//Tuesday
//Wednesday
//Default: "Invalid Day"

let  weekdays = "friday";

switch( weekdays){
 case "monday":
    console.log("monday");
    break;

    case "tuesday":
    console.log("tuesday");
    break;


    case "wednesday":
    console.log("wednesday");
    break;

    default:
        console.log("Invalid Day");
        break;
}


// Question 3
// Create a switch statement for months:

// January
// February
// March
// Default: "Month Not Found"

let month = "March";
switch (month) {
  case "January":
    console.log("January");
    break;
  case "February":
    console.log("February");
    break;
  case "March":
    console.log("March");
    break;
  default:
    console.log("Month Not Found");
}

// Question 4
// Create a switch statement for grades:

// A → Excellent
// B → Good
// C → Average
// D → Needs Improvement
// Default → Invalid Grade

let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Needs Improvement");
    Default: console.log("Invalid Grade");
}

// Question 5
// Create a switch statement for traffic lights:

// Red → Stop
// Yellow → Wait
// Green → Go
// Default → Invalid Signal

let signal = "Green";
switch (signal) {
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Wait");
    break;
  case "Green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

// Question 6
// Create a switch statement for subjects:

// Math
// Science
// English
// Default → Subject Not Available

let subjects = "Math";
switch (subjects) {
  case "Math":
    console.log("Math");
    break;
  case "Science":
    console.log("Science");
    break;
  case "English":
    console.log("English");
    break;
  default:
    console.log("Subject Not Available");
}

// Question 7
// Create a switch statement for payment methods:

// UPI
// Card
// Cash
// Default → Payment Method Not Supported

let Payment = "UPI";
switch (Payment) {
  case "UPI":
    console.log(" Payment done through UPI");
    break;
  case "Card":
    console.log("Payment done through Card");
    break;
  case "Cash":
    console.log("Payment done through Cash");
    break;
  default:
    console.log("Payment Method Not Supported");
}

// Question 8
// Create a switch statement for seasons:

// Summer
// Winter
// Rainy
// Default → Unknown Season

let seasons = "Rainy";
switch (seasons) {
  case "Summer":
    console.log("Summer Season");
    break;
  case "Winter":
    console.log("Winter Season");
    break;
  case "Rainy":
    console.log("Rainy Season");
    break;
  default:
    console.log("Unknown Season");
}

// Question 9
// Create a switch statement for menu options:

// 1 → View Profile
// 2 → Edit Profile
// 3 → Logout
// Default → Invalid Option

let menu = "Logout";
switch (menu) {
  case "View Profile":
    console.log("View Profile");
    break;
  case "Edit Profile":
    console.log("Edit Profile");
    break;
  case "Logout":
    console.log("You have been Logged out");
    break;
  default:
    console.log("Invalid Option");
}

// Question 10
// Create a switch statement for programming languages:

// JavaScript
// Python
// Java
// Default → Language Not Supported

let languages = "JavaScript";
switch (languages) {
  case "JavaScript":
    console.log("JavaScript");
    break;
  case "Python":
    console.log("Python");
    break;
  case "Java":
    console.log("Java");
    break;
  default:
    console.log("Language Not Supported");
}


// Bonus Questions (Mix of Loop + If-Else)
// Question 1
// Print numbers from 1 to 100 and display Even or Odd



for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i, "Even");
  } else {
    console.log(i, "Odd");
  }
}


// Question 2
// Find how many numbers between 1 and 100 are divisible by 3

let divisibleBy3 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    divisibleBy3++;
  }
}

console.log(divisibleBy3);

// Question 3
// Print all numbers from 1 to 50 divisible by both 2 and 5

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Question 4
// Sum of all even numbers between 1 and 100

let evenSum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}

console.log(evenSum);

// Question 5
// Print numbers from 1 to 30 and for each number:
// Fizz

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

