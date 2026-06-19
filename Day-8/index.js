 /*
 onditional Statement
 if else
 switch  */

if(5 > 3) {
    console.log("True");
} else{
    console.log("false");
}


let userAge = 18;
if(userAge > 18){
    console.log(" user can apply for DL");
} 
else if(userAge < 18) {
    console.log("can not apply for Dl");
} 
else if ( userAge == 18){
    console.log("user can apply for LL");
}



let assignmentiscomplete = false;

if(assignmentiscomplete){
    console.log("good")
}v
else{
    console.log("make sure uh do nxt time");
}


const fruits = "pineapple";

switch (fruits) {

  case  "apple":
  console.log("avaible");
  break ;


  case  "banana":
  console.log(" not avaible");
  break ;


  case  "mango":
  console.log(" not avaible");
  break ;


  case  "kiwi":
  console.log("avaible");
  break ;

  default:
    console.log("stock not avaible");
}



for (let number = 1; number < 11; number++) {
  console.log(number);
 }

 for (let number = 1; number < 6; number++) {
   console.log(number);
 }

 for (let number = 11; number < 16; number++) {
   console.log(number);
 }

 for (let number = 100; number < 201; number++) {
   console.log(number, 1, "Hi");
 console.log("Hello", number);
 }




var totalOddNumbersCount = 0;
var totalEvenNumbersCount = 0;

for (var i = 1; i < 101; i++) {
  if (i % 2 == 1) {
    totalOddNumbersCount++;
  } else {
    totalEvenNumbersCount++;
  }
}

console.log(totalOddNumbersCount, "totalOddNumbersCount");
console.log(totalEvenNumbersCount, "totalEvenNumbersCount");









