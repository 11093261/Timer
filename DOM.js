// Is a process that influences our html and css
// the document represents the html
// objects are the html structures Dom sees the html as the object
// html is the root element which is divided into two head and body
// head is divided into title  and the body is divided into tags

// methods of DOM

//1. getelementbyid
// 2. getelementsbyclassName
// 3. getelementby Tag Name
// 4. queryselector
// 5.queryselectorAll

// innerHTML
// Innertext
// textcontent
// outerHTML

const Divid = document.getElementById("DivId");
// console.log(Divid.innerHTML);
// // Innerhtml will return everything inside the body and it will carry the tags
// console.log(Divid.outerHTML);
// // outerhtml will return the element and the tages

// const p = document.getElementsByTagName("p");
// console.log(p[1].innerText);
// // innertext works on index AND innertext only works with text

// const classp = document.getElementsByClassName("classp")
// console.log(classp[0].textContent);

//  innertext will not show everything in this last example but textcontent will show the text in the span

// const attr = document.getElementsByTagName("img");

const Pclass = document.querySelectorAll(".pClass");
Pclass.forEach((p) => {
  console.log(p.innerText);
  p.style.color = "red";
});

Divid.style.backgroundColor = "green";
const h1 = document.querySelector("h1")
h1.style.fontWeight = "400";
h1.style.color = "blue"

// if i want to create an element to be added into my html tag
const paragraph = document.createElement("p");
const content = document.createTextNode("This is new");
paragraph.append(content);
console.log(paragraph.textContent);
Divid.appendChild(paragraph);
paragraph.classList.add("pclass");





// events and eventlistners
// addeventlistner and removeeventlistners
// prepend is used to add  an element at the begining
// appendchild is used to add a child element inside a container and removechild is used to remove child from a container

let array = ["first", "second" , "third", "forth"];
array.forEach((arr) =>{
  console.log(arr);
})



const button = document.querySelector("#add")
const Bgcolor = () =>{
  Divid.style.backgroundColor = "red";
  Divid.style.border = "4px solid black"
  console.log("addEventListener");
}
button.addEventListener("click",Bgcolor);

// removeEventlistner
// button.addEventListener("mouseover",Bgcolor);
const Remove = document.querySelector("#remove");
Remove.addEventListener("click",()=>{

  Remove.removeEventListener("mouseover",Bgcolor);
  console.log("removeEventlistner");
})



