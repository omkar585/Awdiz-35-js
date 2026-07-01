// Question 1
// Use nested loops to print the following pattern:
// 11
// 12
// 21
// 22

for(i=1;i<=2;i++){
for(j=1;j<=2;j++){
    console.log(i + "" + j);
}}


// Question 2
// Use nested loops to print:
// 111
// 222
// // 333

for(i=1;i<=3;i++){
    let output = "";
    for(j=1;j<=3;j++){
            output += i;
        }
        console.log(output);
    }



// Question 3
// Find the smallest number from the array using nested loops.
// let numbers = [45, 12, 78, 23, 9, 56];

let givenNumbers = [45, 12, 78, 23, 9, 56];
let smallest = givenNumbers[0];

for (let i = 0; i < givenNumbers.length; i++) {
    for (let j = i + 1; j < givenNumbers.length; j++) {
        if (givenNumbers[j] < smallest) {
            smallest = givenNumbers[j];
        }
    }
}
console.log("Smallest number:", smallest);

// Question 4
// Count how many times each pair is formed using nested loops.
// Example Output:

// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

 let pairs = [1, 2, 3];

for (let i = 0; i < pairs.length; i++) {
    for (let j = 0; j < pairs.length; j++) {
        console.log(pairs[i], pairs[j]);
    }
}



// While Loop Questions
// Question 5
// Print numbers from 1 to 20 using a while loop.
let i = 1;
while(i<=20){
    console.log(i);
    i++;
}

// Question 6
// Print numbers from 20 to 1 using a while loop.
let i = 20;
while(i>=1){
    console.log(i);
    i--;
}

// Question 7
// Find the sum of numbers from 1 to 10 using a while loop.
// Expected Output:
// 55
sum=0;
let i=1;
while(i<=10){
    console.log(i);
    sum+=i;
    i++;
}
console.log("Sum:", sum);

// Question 8
// Count how many even numbers exist between 1 and 50 using a while loop.
let i = 1;
let evenCount = 0;

while (i <= 50) {
    if (i % 2 == 0) {
        console.log(i);
        evenCount++;
    }
    i++;
}
console.log("Even count:", evenCount);

// Object Questions
// Question 9
// Create an object named student with the following properties:
// name
// age
// course
// city

// Print:

// Entire object
// Student name
// Student course
// Question 10


student={
    name:"Rahul",
    age:25, 
    course:"JavaScript",
    city:"Delhi"
};  
console.log(student);
console.log("Student name:", student.name);
console.log("Student course:", student.course);
console.log("Student object:", student);







// Create the following object:

// const company = {
//   name: "Tech Solutions",
//   employees: 100,
//   location: "Mumbai",
//   departments: ["HR", "Development", "Sales"]
// };

// Print:

// Company name
// Location
// Last department

let company = {
    name: "Tech Solutions",
    employees: 100,
    location: "Mumbai",
    departments: ["HR", "Development", "Sales"]
};
console.log("Company name:", company.name);
console.log("Location:", company.location);
console.log("Last department:", company.departments[company.departments.length - 1]);





// Bonus Questions
// Bonus 1

// Create the following object:

// const mobile = {
//   brand: "Samsung",
//   model: "S25",
//   price: 85000
// };

// Print all properties using both:

// mobile.brand
// mobile["brand"]

let mobile = {
    brand: "Samsung",
    model: "S25",
    price: 85000
};
console.log("Brand using dot notation:", mobile.brand);
console.log("Brand using bracket notation:", mobile["brand"]);




// Bonus 2
// Create an object with a function:
// const person = {
//   name: "Rahul",
//   age: 25,
//   greet: function () {
//     return this.name;
//   }
// };
// Call the function and print the returned value.
let person = {
    name: "Rahul",
    age: 25,
    greet: function () {
        return this.name;
    }
};
console.log("Greeting:", person.greet());



// Bonus 3

// Find the biggest number from the array using nested loops.

// let numbers = [12, 34, 56, 78, 90, 23, 45];
// Bonus 4

let numbers = [12, 34, 56, 78, 90, 23, 45];
let biggest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] > biggest) {
            biggest = numbers[j];
        }
    }   

}
console.log("Biggest number:", biggest);









// Print the following pattern using nested loops:

// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 5; i++) {
//     let output = "";    
//     for (let j = 1; j <= i; j++) {
//         output += "*";
//     }
//     console.log(output);
// }