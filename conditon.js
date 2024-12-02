// CONTROL STRUCTURE
// Control structure has to do with the control of the flow of the execution of the function
// Condtional statement is a conditon that is dependent of the actions
// types of conditonal statements
// 1. if statement
// 2. if else ,,
// 3. Switch ,,
// if conditon statement example

let b = 5;
if (b == 5);
{
  console.log("of course");
}

let c = "man";
if (c === "man") {
  console.log("Yes");
} else {
  console.log("NO");
}

// prompt is a command in javascript

// let year = prompt("what year was the lockdown ?");
// if(year === "2020"){
//     alert("you are correct")
// }else{
//     alert("you are wrong")
// }

// else if conditional statement
// example
let p = 5;
if (p == 3) {
  console.log("True");
} else if (p > 4) {
  console.log("maybe");
} else if (p > 4) {
  console.log("alright");
} else {
  console.log("No");
}

// Ternary operators
// e.g (conditon) ? (condition expression) : (condition expression if false)

let Names = "Emeka";
Names === "Emeka" ? console.log("yes") : console.log("no");

// Assignment READ ABOUT SWITCH CASE

// ASSIGNMENT 2

// Write and alert statement to check for odd number or and even number

// let number = prompt("enter number");
// if ((number = number == "" || isNaN(number))) {
//   alert(number + " this is an invalid Number");
// } else {
//   number = prompt("Enter a Number");
//   divideANumber = number % 2;
//   evenNumber = divideANumber === 0;
//   oddNumber = divideANumber === 1;
//   if (number % 2 === 0) {
//     alert(number + " it is an even number");
//   } else if (number % 2 === 1) {
//     alert(number + " it is an odd number");
//   }
// }
let state = "Abia";
console.log(state * 2);

// let number = prompt("Enter a number");
// let Newnumber = Number(number);
// if(isNaN(Newnumber)){
//     alert("invalid number")
// }else if(Newnumber % 2  == 0){
//     alert(Newnumber + "  is an even number");
// }else{
//     alert(Newnumber + " is an odd number");
// }
// console.log(typeof Newnumber);
// console.log(typeof number);
// functions to convert something to number
// 1. Number(value)
// 2.String ()
// 3.Boolean ()
// Isnan ()
// 
// Switch  case statement
// switch ()
// case: value
// break

// example of switch case

let day = 3;
let dayname;
switch (day) {
    case 1:
        dayname = "Monday"
        
        break;

    case 2:
        dayname = "Tuesday"

        break;
    
    case 3:
        dayname ="wednsday"

        break;
    case 4:
        dayname = "Thursday"
        

    default:
        dayname = "Invalid day"
        break;
}
console.log(dayname);
// this means the value 3 is found then it is show the names of the day but if 3 is not found in the cases then the invalid will run 
// example if we declear 7 as the data

// Loop
// Loop is a technique in javascript that controls how the code runs repeatedly
// types of major loops
//1. for loop
//2. while loop
//3. do while loop

// others are;
// for in
// for of