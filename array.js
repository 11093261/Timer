// Array methods
// An array is an unordered list
// array methods are;
// - push 
// pop
// length
// shift
// unshift
// concat
// splice
// find
// include
// split
// indexof


// synthax
// let Names = ["chima","emeka"]

// push and pop are intersted in the end of the array i.e is to say add or remove from the end of the array push adds and pos removes
// shift and unshift are interested in the begining of the array while this will add or remove somthing from the begining of the array

let Names = ["Emeka" , "Chidi" ,"Chima" , "Timaya"]
Names.push("chiboy");
Names.shift()
console.log(Names);


let Numbers = [3 , 4 , 5 , 6 , 7 ,8];
Numbers.pop();
Numbers.unshift(2)
console.log(Numbers);

// shift and unshift methods examples
let animals = ["dog"  , "cat" ,"lion" ,"cattle","sheep"];
console.log(animals.indexOf("lion"));
console.log(animals[animals.length - 2]);
const extraAnimals = ["hen","monkey"];
const Allanimals = animals.concat(extraAnimals);
console.log(Allanimals);

let food = ["rice" , "beans", "cake" , "noodles" , "fufu"]
food.splice(0 ,3); 
console.log(food);
// splice means to start from an index and delete the number of items