// data types//
//string//

let name = "omkar";
let email = 'omkarperekar@gmail.com'
let password = `om@123`;

console.log(name,email,password);
console.log(typeof(name,email,password));


// number //

let age = 21 ;
console.log( age);
console.log(typeof(age));


// boolean //

const isLoggedIn = true ;
console.log(isLoggedIn) ;
console.log(typeof (isLoggedIn));


// undefined //

var firstName;
console.log(firstName);
console.log(typeof(firstName));


// null //

var userData = null ;
console.log(userData);
console.log(typeof(userData));



let a = 10;
console.log(a);
let b = a;
console.log(b);
b = 20;
console.log(a);
console.log(b);



// Arithmetic operators //

// Addition //
console.log(10 + 5); 

// Subtraction //
console.log(5 - 10); 

// Multiplication //
console.log(10 * 5); 

// Division //
console.log(10 / 2); 



// 0 - even
console.log(10 % 2);

// 1 - odd
console.log(11 % 2);


//(== & ===)

var number1 = 10;
var number2 = "10";
//true //
console.log(number1 == number2);
//false//
console.log(number1 === number2);



var left = 10;
var right = 20;

console.log(left < right);
console.log(left > right);
console.log(left <= right);
console.log(left >= right);
console.log(left != right);
console.log(left == right);