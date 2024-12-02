const input = document.querySelector("textarea");
const counting = document.querySelector(".count");
const remain = document.querySelector(".Remain");
const span = document.querySelector("span");


input.addEventListener("keyup" ,() =>{
    text()

})
const text = () =>{
    const text = input.value.length
    counting.innertext = text;
    setTimeout(()=>{
        span.innerText = text
        remain.innerText = input.getAttribute("maxlength").length - text;
        if(span.textContent.length  > text){


        }

    },1000)


}