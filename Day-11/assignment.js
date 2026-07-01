// Question 1 – Function with Parameters

function multiply(a,b){
    return a*b;
}
console.log(multiply(5,4));




// Question 2 – Function with Return

function findsquare(number){
    return number*number;
}
console.log( findsquare(6));


// Question 3 – Global Scope


let score =50;
 function increaseScore(){
    score = score +10;
 }

 increaseScore()
  increaseScore()
increaseScore()

console.log(score);





// Question 4 – Block Scope

if (true){
    let city = "Mumbai";
    console.log(city);
}
console.log(city);



// Question 5 – Nested Functions

 function college(){
    let department = "IT";
    function student (){
        let name = "Shivani";

        console.log(department)
        console.log(name)

    }
    student();
 }
 college();




// Question 6 – Simple Closure

function greeting (){
    let message = "Welcome to Javacript" ;
    return function(){
        console.log(message);
    }
}

const showMessage = greeting();
showMessage();




// Question 7 – Counter using Closure

function createcounter(){
    let count = 100;
    return function(){
        count += 5;
        console.log(count);
    }
}

const counter = createcounter();
counter();
counter();
counter();
counter();



// Question 8 – Wallet using Closure

function wallet(){
    let balance= 5000;
    return function (amount){
        balance = balance - amount;
        console.log ("Remaining Balance :",balance);
    }
}


const mywallet = wallet();

mywallet(1000);
mywallet(500);
mywallet(700);





// Question 9 – Password Checker using Closure

function createLogin() {

    let password = "javascript123";

    return {

        checkPassword(input) {

            if (input === password) {
                console.log("Correct Password");
            } else {
                console.log("Wrong Password");
            }

        },

        passwordLength() {

            console.log(password.length);

        }

    };

}

const login = createLogin();

login.checkPassword("javascript123");
login.checkPassword("java");

login.passwordLength();





// Question 10 – Independent Counters

function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());
