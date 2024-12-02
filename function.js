// function is a block of code that is used to perform a specific action
// three basic ways of writing functions in javascript

// 1. function declaration
// 2. function expression
// 3. Arrow function(ES6)

// FUNCTION DECLARTION
// synthax
// function funtionname (parameters){
// code expression
// }
// FUNCTION CONCEPTS

//1. return
// 2. argument
// 3. callback
//4. parameter
// 5. Anonymous
// Calling a function

// parameters are like placeholders expecting a value it means parameters are expecting somthing
// examples of function declaration

// function Add(a,b){
//     console.log(a + b);
// }
// Add(2, 3);
// Add(5, 20);

// function chief(){
//     alert("my help is here");
// }
// chief();
// function expression
// in function expression you assign a variable to it.

// Anonymous function 
// example

const Me = function (){
    console.log("me")
}
Me();

// Arrow function
// example

const Add = (a , b) =>{
    console.log(a + b);
} 
Add( 10 , 3);

// default paramters
function defaultparamter(Name = "Emeka"){
    console.log(Name);


}
defaultparamter();

// Arrow function example and it is the modern way of writing in javascript
// synthax
// const functionname = (parameter)=>{
    // }
// const chukwudi = (a, b) =>{
//     console.log(a + b);
// }
// chukwudi(18 , 4);
// The return statement terminates the code and returns a value
// return can be used to store a value
// Example;
// const Addition = () =>{
//     return a + b;
// }
// console.log(Addition(3 , 4))

// example 3;
const odd = (a ,b) => {
    console.log(a + b)
    return 10;

}
console.log(odd(3,6));

// call back function is a function inside another function or a function that is pass into another function as an argument

// examples of a call back function
function Greet(callback){
    const Name = "chima";
    callback(Name);
    
}
Greet(function (Name){
    console.log("Hello" + Name);

});

// assignment create mini calculator 
// using prompt the 

// first step will ask the input and the second one will ask for the operator and the third one will ask for you last number
// function, Arithematic operators and if statement
// function  cal (a , b){
//     let newnumber = prompt("enter a number")
//     let firstvalue = Number(newnumber);
//     if(isNaN(firstvalue)){
//         alert(5);
//     }
//     else if (firstvalue %2 == 0 || firstvalue %2 == 1){
//         return 10;
//     }
//     else{
//         let newestnumber = prompt("enter a number")
//         let morenumber = Number(newestnumber);
//         if(isNaN(morenumber)){
//             alert("")
            
//         }else if(morenumber %2 == 0 || morenumber %2 == 1){
//             return 4;
//         }
//         else{
//             alert(firstvalue + morenumber);
//         }

//     }
// }
// cal(8 ,4);


// const calculator = (a , b) => {
//     let newnumber = prompt(a)
//     let oldnumber = prompt("")
//     let sign = prompt(b)
//     let addednumber = Number(newnumber || sign)
//     if(isNaN(addednumber)){
//         alert("invalid")
//     }else if(addednumber %2 == 0 || addednumber %2 == 1){
//         return (2 + 5);
        
    
//     }
//     alert(2 + 3);

// }
// calculator();

// const y = (a, b) => {
//     console.log(a + b);

// }
// y(10 , 3);
function adding (a , c){
    console.log(a + c)

}
adding(1,3);

// involving a word with const means you will not be allowed to reassign a value to that code
// using function to determine the value of a prism
// function prism(l, w , h){
//     return l * w * h;

// }
// prism(23 , 10 , 5);

// using the ES6 Synthax

const prism = (l , w , h) => {
    console.log(l * w * h)
}
prism(34, 45, 33);

// writing a code of function and for loop

function saysomthing(hello){
    for(let o = 0; o < 4; o++){
        alert("you are welcome");

    }
}
saysomthing();

// anoymous function is a function defined without a name
let a = function(c , d){
    console.log(c - d);
}
a();

// a callback function is a function that is called in another function
// example

// function myfunction(v , b){
//     console.log(v % b);
// }
// function arth(v , c){
//     callback(v, c);
// }
// arth(myfunction);

// we make use of this when we want to access a value in an object
// this is used in a method to access a value in an object

// example

const people = {
    name: "chima",
    age: 32,
    greet(){
        console.log(this.names)
    }

}
people.greet();

