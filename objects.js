//Object is a data type that works with keys and values
// synthax
// const objectname = {
// keys:values known as properties
// }
// objects can contain diffferent data types such as arrays, strings, floats etc

const person = {
    name:"chima",
    age:32,
    array:["eva","luz","you"],
    object:{
        num:1,
        job:"dev",

    },
    status:null
}
console.log(person.name);
// dot notation 
console.log(["age"]);
person.food = "rice";
console.log(person);
person.array.push("blood")
console.log(person);
console.log(person.name + " is" + person["age"]);
// deleting property in an object
delete person.status;
console.log(person);
person.age = 41;
// using iteration

for(key in person){
    console.log(person[key]);
}

// square bracket 
// name is this object is a key while the string chima is a value
// To access any value inside an object we can use a dot notation or bracket

// iteration methods in objects
// examples of iterations
// for in
// for of
// 
 
// synthax
// exaple from our object
// for(key in person){
// console.log(person[key])
// }

// Methods is a function that is a property in an object

// example of method
     const Names = {
        name: "kingsley",
        job: "Mechanic",
        greet:function() {
        console.log("Mee")
    },
// using ES6 METHOD
 greet(){
    console.log("this is " + this.name );
 },

};
 Names.greet();
 console.log(Names.name);
 for(key in Names){
     console.log("The values are: " + Names[key]);
 }
// console.log(Object.keys(person));
// // important aspects that helps us to convert our objects in an array
// // 1. object.keys ----- array of keys
// // 2. object.value ----- array of values
// // 3. object.array ----- array of both keys & values.
// console.log(Object.values(person));
// console.log(Object.entries(person));

// DOM object model


// there are three ways of getting the values in an object
// 1. using the dot notation
// 2. square bracket.
// 3. this

let count = ["2" , "3" ,"5", "4"]
for(let k = 0; k)