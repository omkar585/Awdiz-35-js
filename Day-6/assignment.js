//1. push()
//Question 1:
//Create an empty array called fruits and add "Apple", "Mango", and "Banana" using push(). Print the array.

 const fruits = [];
 fruits.push("Apple");
 fruits.push("Mango");
 fruits.push("Banana");
 console.log(fruits);



// Question 2:
//Create an array cities = ["Mumbai"]. Add "Pune" and "Delhi" using push() and print the second city.

const cities = ["Mumbai"];
cities.push("Pune");
cities.push("Delhi");
console.log(cities[1]);


//2. pop()
//Question 1:
//Create an array [10, 20, 30, 40, 50]. Remove the last element using pop() and print both the removed element and updated array.

const numbers =[10,20,30,40,50];
const removedElement = numbers.pop();
console.log(removedElement);
console.log(numbers);

//Question 2:
//Create an array of colors ["Red", "Blue", "Green"]. Remove the last two colors and print the remaining array.

const colors = ["Red", "Blue", "Green"];
colors.pop();
colors.pop();
console.log(colors);

//3. shift()
//Question 1:
//Create an array ["Virat", "Rohit", "Rahul"]. Remove the first player and print the removed player.

const players =  ["Virat", "Rohit", "Rahul"];
const removedplayers = players.shift();
console.log(removedplayers);
console.log(players);

//Question 2:
//Create an array [100, 200, 300, 400]. Remove the first element and print the updated array.

const numbers = [100,200,300,400];
//const removednumbers = numbers.shift()
//console.log(removednumbers);
numbers.shift();
console.log(numbers);


//4. unshift()
//Question 1:
//Create an array [2, 3, 4]. Add 1 at the beginning using unshift().

const numbers = [2,3,4];
numbers.unshift(1);
console.log(numbers);

//Question 2:
//Create an array ["B", "C", "D"]. Add "A" at the start and print the array.

const alphabates = ["B","C","D"];
alphabates.unshift("A");
console.log(alphabates);

//5. map()
//Question 1:
//Create an array [1, 2, 3, 4, 5]. Use map() to create a new array containing squares of all numbers.

const numbers = [1,2,3,4,5];
const squares = numbers.map((num) => num * num);
console.log(squares);

//Question 2:
//Create an array of prices [100, 200, 300]. Add 10% tax to each price using map().

const prices =[100,200,300];
const taxprices = prices.map((num) => num + 10);
console.log(taxprices);

//6. filter()
//Question 1:
//Create an array [1,2,3,4,5,6,7,8]. Use filter() to get all even numbers.

const numbers = [1,2,3,4,5,6,7,8];
const EvenNumbers = numbers.filter((num) => num % 2 ==0);
console.log(EvenNumbers);

//Question 2:
//Create an array [12, 45, 7, 89, 23]. Use filter() to get numbers greater than 20.

const numbers = [12, 45, 7, 89, 23];
const biggerthan = numbers.filter((num) => num > 20 );
console.log(biggerthan);


//7. filter() with Objects
//Question 1:
//const employees = [
  //{ name: "Amit", active: true },
  //{ name: "Riya", active: false },
  //{ name: "John", active: true },
//];
const employees = [
  { name: "Amit", active: true },
  { name: "Riya", active: false },
  { name: "John", active: true },
];
//Find all active employees.

const activeemp = employees.filter(employees => employees.active);
console.log(activeemp);

//Question 2:
//const products = [
  //{ name: "Laptop", available: true },
  //{ name: "Mobile", available: false },
  //{ name: "TV", available: true },
//];
//Find all available products.
const products = [
  { name: "Laptop", available: true },
  { name: "Mobile", available: false },
  { name: "TV", available: true },
];
const availableproducts = products.filter(products => products.available);
console.log(availableproducts);

//8. reduce() - Sum of Numbers
//Question 1:
//Use reduce() to find the sum of [5, 10, 15, 20].

const numbers = [5, 10, 15, 20];
const sum = numbers.reduce((acc,num) => acc + num,0);
console.log(sum);

//Question 2:
//Use reduce() to find the total of [100, 200, 300, 400].

const numbers = [100, 200, 300, 400];
const total = numbers.reduce((acc,num) => acc + num,0 );
console.log(total);

//9. reduce() - Cart Total
//Question 1:
//Calculate the total bill of cart items [500, 1200, 800].


const carttotal = [500, 1200, 800];
const totalbill = carttotal.reduce((acc,num) => acc + num ,0);
console.log(totalbill);

//Question 2:
//Calculate the total salary from [25000, 30000, 40000].

const salary = [25000, 30000, 40000];
const totalsalary = salary.reduce((acc,num) => acc + num ,0);
console.log(totalsalary);


//10. reduce() - Count Elements
//Question 1:
//Count the number of elements in [1,2,3,4,5,6] using reduce().

const elements = [1,2,3,4,5,6] ;
const Countelements = elements.reduce((acc) => acc + 1,0);
console.log(Countelements);

//Question 2:
//Count the number of students in ["A", "B", "C", "D"] using reduce().

const students = ["A", "B", "C", "D"];
const studentscount = students.reduce((acc) => acc + 1,0);
console.log(studentscount);  


//11. Ternary Operator ? :
//Question 1:
//Check whether 10 is greater than 5. Print "Yes" otherwise "No".

console.log(10 > 5 ? "Yes" : "No");

//Question 2:
//Check whether a number num = 15 is even or odd using the ternary operator.

 console.log(15 % 2 == 0 ? "even" : "odd");
 
//12. reduce() - Find Maximum
//Question 1:

//Find the largest number in [5, 12, 8, 20, 3].

const numbers = [5, 12, 8, 20, 3];
const largest = numbers.reduce((acc,num) => acc > num ? acc: num ) ;
console.log(largest);


//Question 2:
//Find the maximum marks from [67, 89, 45, 98, 76].

const marks = [67, 89, 45, 98, 76];
const max = marks.reduce((acc,num) => acc > num ? acc:num);
console.log(max);


//13. forEach()
//Question 1:
//Print double of every number in [2, 4, 6, 8] using forEach().

const numbers = [2, 4, 6, 8];
 numbers.forEach((num) => console.log(num*2));

 //Question 2:
//Print the square of each number in [1, 2, 3, 4] using forEach().

const squares = [1, 2, 3, 4];
squares.forEach((num) => console.log(num **2));


//14. at()
//Question 1:
//Create an array ["HTML", "CSS", "JavaScript"] and print the first element using at().

const lang = ["HTML", "CSS", "JavaScript"];
console.log(lang.at(0));

//Question 2:
//Create an array [10, 20, 30, 40] and print the last element using at(-1).

const element = [10, 20, 30, 40];
console.log(element.at(-1));


//15. concat()
//Question 1:
//Combine [1,2,3] and [4,5,6] using concat().

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = array1.concat(array2);
console.log(array3);

//Question 2:
//Combine ["HTML", "CSS"] and ["JS", "React"] into a new array.

const lang1 = ["HTML", "CSS"];
const lang2 = ["JS", "React"];
const lang3 = lang1.concat(lang2);
console.log(lang3);



//16. find()
//Question 1:
//Find the first number greater than 50 in [10, 25, 60, 80, 40]

const numbers =  [10, 25, 60, 80, 40];
const greaternum = numbers.find((num) => num > 50);
console.log(greaternum);

//Question 2:
//Find the first even number in [1, 3, 5, 8, 10].

const numbers = [1, 3, 5, 8, 10];
const evenNumbers = numbers.find((num) => num % 2 === 0);
console.log(evenNumbers);


//17. findIndex()
//Question 1:
//Find the index of the first number greater than 20 in [5, 10, 25, 30, 15].

const numbers = [5, 10, 25, 30, 15];
const greater = numbers.findIndex((num) => num > 20);
console.log (greater);

//Question 2:
//Find the index of the first odd number in [2, 4, 6, 7, 8].

const numbers  = [2, 4, 6, 7, 8];
const oddnumber = numbers.findIndex((num) => num % 2 ===1);
console.log(oddnumber);


//18. Array Index Access []
//Question 1:
//Create an array ["India", "USA", "Japan"] and print the first country.


const country = ["India", "USA", "Japan"];
const first = country[0];
console.log(first);
//console.log(country[0]);


//Question 2:
//Create an array [100, 200, 300, 400] and print the third element.

const elements = [100, 200, 300, 400];
const secondlastElement = elements[2];
console.log(secondlastElement);





