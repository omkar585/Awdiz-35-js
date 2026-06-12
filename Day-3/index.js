// Logical operators //
//if more than one condition then use logical operators//
// &&  AND Opeerator//

let num1 = 10;
let num2 = 20;
let num3 = 30;

console.log(num1 > num2);
console.log(num2 < num3);

console.log(num1 < num2 && num2 < num3 && num1  <  num3);//true
console.log(num1 > num2 && num2 > num3 );//false


//  ||  OR Operator  //

let num1 = 10;
let num2 = 20;
let num3 = 30;

console.log(10 < 20 || 20 < 30 || 10 < 30);
console.log(num1 > num2 || num2 > num3 || num1 > num3);


//  FUNCTIONS //

// {
//     console.log("this is a block...")
// }


//FUNCTION DECLARETION//

function search () {
    console.log("search here omkar");
     console.log("hii omkar");
}
search();

//FUNCTION EXPRESSION //

let search = function () {
    console.log("funsction expression");
}
search();

//ARROW FUNCTION //

const search =() =>{
    console.log("Arrow function");
}

search();


// examples //
//ADDITION (function declaration)//

function addition(num1,num2,num3){
    console.log(num1 + num2 + num3);
}
addition(20,10,50);

//SUBTRACTION (function expression)//

let subtraction = function(v1,v2){
    console.log(v1 - v2);
}
subtraction(50,60);


//multiplication (arrow function) //

const multiplication = (v1,v2,v3) => {
    console.log(v1 * v2 * v3);
}
multiplication(10,6,8);


//RETURN //

function greeting(message){
    return message;
}
const message = greeting("hii omkar");
console.log(message);



const greeting = ()=> {
    return "hello";
}

const message = greeting();
console.log(message);