var age = 21;
var number = 3;
console.log(age,number);

// var//
//declare and assign //
var number = 2; 
console.log(number);
//reassign//
numbaer  = 3;
console.log(number);
// both redeclare and assign //
var number = 4;
console.log(number);



//Let//
//declare and assign //
let age = 21;
console.log(age);
//reassign//
age = 25;
console.log(age);
//error//
let age = 30;
console.log(age);



//const//
//error//
const number = 20;
console.log(number);
//error//
number = 21;
console.log(number);
//error//
const number = 22;
console.log(number);


//Hoisting//

age = 21;
console.log(age);
var age;

//error with let //
age = 22;
console.log(age);
let age;


//const//
age = 22;
console.log(age);
const age;



//Scope//

const age1 = 21;
let age2 = 22;
var age3= 23;
{
    console.log(age1,age2,age3);
}
    

//second case  only var will execute//
{
  var age = 23;
  
}
console.log(age);



//practice //

var number2;
var number1 = 1;
{
  number2 = 2;
  let number3 = 3;
  const number4 = 4;
  console.log(number4);
  console.log(number1);
  {
    console.log(number3);
    console.log(number2);
    
  }
  
}
  

var number1 = 1;

{
    number2 = 2;
    let number3 = 3;
    //const number4 = 4;//executed//
    {
         const number4 = 4;//error//
         console.log(number3);//executed//
         console.log(number2);//executed//

    }
     console.log(number4);
    
}

var number2;
console.log(number1);




console.log(number); //undefined//
number = 20;
var number;



console.log(number);  //undefined//
number = 20;
console.log(number);//executed//

var number;
