// color to switch over
const colors = ["green", "red","rgba(133 ,122 ,200)","#f15025"];
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const body = document.querySelector("body")
console.log(body);
const span = document.querySelector("span")


button.addEventListener("click" ,() =>{
    let randomNumber = changingcolor();
    body.style.backgroundColor = colors[randomNumber];
    console.log(randomNumber);
    span.textContent = colors[randomNumber];


})

const changingcolor = () => {
    return Math.floor(Math.random * colors.length)
    

    
}

const Colornumber = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E"];
button.addEventListener("click",() =>{
    let colorindex = "#";
    for(i = 0; i < 6 ; i++){
        colorindex += [addingColors()];
        span.textContent = colorindex;
        body.style.backgroundColor = colorindex;
    }
    
})

const addingColors = () => {
    return Math.floor(Math.random() * Colornumber.length)
}