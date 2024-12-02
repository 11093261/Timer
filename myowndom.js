// const Divs = document.getElementById("unique");
// console.log(Divs.innerHTML);
// console.log(Divs.outerHTML);

// const p = document.getElementsByTagName("p")
// console.log(p[0].innerText);

// const h1 = document.getElementsByTagName("h1")
// console.log(h1[1].innerText);

// 
// const Unique = document.querySelectorAll(".Unique");
// Unique.forEach((para) =>{
//     para.style.color = "yellow";
//     para.style.fontweight = "20px";
    
// })
// const Divs = document.getElementById("unique")
// Divs.style.backgroundColor = "blue";
// const newpara = document.createElement("p");
// const morepara = document.createTextNode("you are now welcome to become a developer")
// newpara.append(morepara);
// console.log(newpara.textContent);
// Divs.appendChild(newpara);
// Divs.style.color = "white"

const personId = {
    names:"Angola",
    placofbirth:"Japan",
    age:"56",
    job:"Trader",

// this is the method code
    password:function(){
        console.log("12344556");

    },
    // using the Es6 method
    password(){
        console.log(this.placofbirth)
    }
    

};
    

// method is a property of an object i.e it is the part of the object
// now using iteration method to get his age of the person
// iteration means running all the codes at a go.
// for(key in personId){
//     console.log(personId[key]);
// };
// // Remeber there are two kinds of methods used in javascript objects


// // a callback function is a function that is written inside another function as an argument

// // using an arrow function



// function runit(unit){
//     let run = "ok"
//     unit(run);

// }

// runit(function(run){
//     console.log(run);
// })

// const numberunits = "huma  "


// const math = Math.round(2.333)
// console.log(math)

// function myfunction(click){
//     console.log("it is my new code");
// }
// myfunction(hello);

const objvalue = {
    names:  "uche",
    group: "A",
    job: "Nurse",
    // now using a method we have
    greet:function(){
        console.log("monday")
    },
    // now using the ES6 method
    greet(){
        console.log("his name is " + this.names);
    },
    objvalue
};

const Unique = document.querySelectorAll(".Unique");
Unique.forEach((p) =>{
    console.log(p.innertext);
    
})
