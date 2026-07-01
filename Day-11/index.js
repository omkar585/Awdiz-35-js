// Global Variable and Function

let age=25;

function userAge()
{
  
age++;
}
userAge();
userAge();
userAge()

  console.log(age)







function addition (a,b){
let result =a+b;
return result;
}
console.log(addition(1,2));






// Function with Parameters and Return

function addition (a,b){
let result =a+b;
return result;
}
console.log(addition(1,2));







// Block Scope     (  Block Scope,   if Statement)

if(true)
{
let greet ="hello";
console.log(greet);
}







// Block Scope Error    (Block Scope,ReferenceError)

if(true)
{
let greet ="hello";
console.log(greet);

}

console.log(greet);










// Lexical Scope

let a= 1;
function outer(){
    var b = 2;
   function inner(){
        let c = 3;
        console.log(a)
        console.log(b)
        console.log(c)

    }
    inner();
}
outer();










Closure
 
function outer(){
    var greet = "Hello";
    function inner(){
    console.log(greet)
    }
    return inner;
}

outer();

const result = outer();
result();








// Object and Method

const mydata = {
greet :function(){
console.log("hello ")
}
}
console.log(mydata.greet);







// Closure Counter    (Closure ,Private Variable)

function counterConstrutor(){
let count =0;
return function (){
    count++;
    console.log(count,"count");
}
}

const counter = counterConstrutor();
 
counter()
counter()       
counter()
counter()








// Bank Account Example  ( Closure, Data Hiding, Private Variable)


function bankAccount(){ 
    let balance =1000;
    return function(amount){
    balance -= amount;
    console.log(balance,"remaining balance")
}
}

const account = bankAccount();
account(200);
account(50);
account(50);
console.log(balance,"balance")





// Password Protection using Closure


function createUser(){
    let password = "abcde"
    return{
     checkpassword: function(raw){
       return raw == password
     },
     checkPasswordLength: function(raw){
    return raw.length;
     }
    }
}

const user = createUser();

console.log(user.checkpassword("abcde"));
console.log(user.checkpasswordLength("abcde"));
console.log(password);






//Counter 

function createCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

const c1 = createCounter();
console.log(c1());
console.log(c1());
console.log(c1());
console.log(c1());

const c2 = createCounter();
console.log(c2(), "c2")
