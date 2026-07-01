// Array Traversal (Accessing Array Elements)


var numbers = [1,2,3,4,5,6,"shsjshk"];
let target = 5 ;
 function findTargetIndex(array,target){

 
 for(let i = 0 ; i<array.length; i++)
    {
    console.log(i,array[i]);
    }
 }

 findTargetIndex(numbers,target)







//  Linear Search

var numbers = [1,2,3,4,5,6];
let target = 1 ;

 function findTargetIndex(array,target){

 let foundIndex = false;

 for(let i = 0 ; i<array.length; i++)
    {
   //  console.log(i,array[i]);
    if(array[i]===target){
      foundIndex = true;
      return(i);
    }
    }
    if(foundIndex === false){

   return-1
    }
 }

 console.log(findTargetIndex(numbers,target))






    //    binary approach

// Finding Middle Element

var numbers = [1,2,3,4,5,6];
let target = 1 ;

 function findTargetIndex(array,target){

// console.log(numbers.length/2)
let middleIndex = array.length / 2;
let middleElement = array[middleIndex];

return {middleIndex,middleElement};
 }
 console.log(findTargetIndex(numbers,target))






// Middle Element using Math.floor()

var numbers = [1,2,3,4,5,6];
let target = 1 ;

 function findTargetIndex(array,target){

// console.log(numbers.length/2)
let middleIndex = Math.floor(array.length /2);
let middleElement = array[middleIndex];
if(target===middleElement){
   return middleIndex;
}
if(target > middleElement){
   console.log("target is greater than middleelement");
}
if (target <middleElement){
   console.log("target  is smaller than middleelement")
}
return {middleIndex,middleElement};
 }
 console.log(findTargetIndex(numbers,target))






// Binary Search on Odd Length Array

var numbers = [1,2,3];
let target = 1 ;

 function findTargetIndex(array,target){

// console.log(numbers.length/2)
let middleIndex = Math.floor(array.length /2);
let middleElement = array[middleIndex];
if(target===middleElement){
   return middleIndex;
}
if(target > middleElement){
   console.log("target is greater than middleelement");
}
if (target <middleElement){
   console.log("target  is smaller than middleelement")
}
return {middleIndex,middleElement};
 }
 console.log(findTargetIndex(numbers,target))







// Binary Search on Single Element Array

var numbers = [1];
let target = 1 ;

 function findTargetIndex(array,target){

// console.log(numbers.length/2)
let middleIndex = Math.floor(array.length /2);
let middleElement = array[middleIndex];
if(target===middleElement){
   return middleIndex;
}
if(target > middleElement){
   console.log("target is greater than middleelement");
}
if (target <middleElement){
   console.log("target  is smaller than middleelement")
}
return {middleIndex,middleElement};
 }
 console.log(findTargetIndex(numbers,target))





// Binary Search using Left and Right Pointer

var numbers = [1,2,3,4,5,6];
let target = 1;

function findTargetIndex(array, target) {

   let left = 0;
   let right = array.length - 1;

   let middleIndex = Math.ceil((left + right) / 2);
   let middleElement = array[middleIndex];

   if (target === middleElement) {
      return middleIndex;
   }

   if (target > middleElement) {
      console.log("target is greater than middleelement");
      
   }

   if (target < middleElement) {
      console.log("target is smaller than middleelement");
      right = middleIndex - 1;
      console.log(right, "right");
   }

   return {
      middleIndex,
      middleElement
   };
}

console.log(findTargetIndex(numbers, target));









// Binary Search using While Loop

 var numbers = [1,2,3,4,5,6];
let target = 6;

function findTargetIndex(array, target) {

   let left = 0;
   let right = array.length - 1;

   while(left<= right)
   {
       let middleIndex = Math.ceil((left + right) / 2);
       let middleElement = array[middleIndex];
       console.log(middleElement,"middleElement");
   if (target === middleElement) {
      return middleIndex;
   }

   else if (target > middleElement) {
      console.log("target is greater than middleelement");
      left =middleIndex +1;
      
   }

   else if (target < middleElement) {
      console.log("target is smaller than middleelement");
      right = middleIndex - 1;
      
    }
  }
}
console.log(findTargetIndex(numbers, target));








// Binary Search with Dry Run (Tracing Each Iteration)

 var numbers = [1,2,3,4,5,6];
let target = 5;

function findTargetIndex(array, target) {

   let left = 0;
   let right = array.length - 1;

   while(left<= right)
   {
       let middleIndex = Math.ceil((left + right) / 2);
       console.log(middleIndex,"middleIndex")

       let middleElement = array[middleIndex];
       console.log(middleElement,"middleElement");

   if (target === middleElement) {
      return middleIndex;
   }

   else if (target > middleElement) {
      console.log("target is greater than middleelement");
      left =middleIndex +1;
      
   }

   else if (target < middleElement) {
      console.log("target is smaller than middleelement");
      right = middleIndex - 1;
      
    }
  }
}
console.log(findTargetIndex(numbers, target));






// JavaScript Math Methods (Math.ceil() and Math.floor())

// console.log(2.5);
// console.log(Math.ceil(2.5));
// console.log(Math.floor(2.5));
