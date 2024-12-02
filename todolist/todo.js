const form = document.querySelector("form");
const input = document.querySelector("input");
const div = document.querySelector("div");
const secondbutton = document.querySelector("#secondbtn");

form.addEventListener("submit",(event)=>{
    // preventdefault will stop the event from refreshing everytime we type in input tag
    event.preventDefault();
    // const task = input.value
    // whitespace means empty space
    // console.log(task)
    // input.value = ""
    // input.value.trim();
    const task = input.value.trim();
    if(task !==""){
        const p = document.createElement("p");
        p.textContent = task;
        p.classList.add("task");
        div.appendChild(p);
        // div.prepend(h1);






    }
    input.value = "";

})


secondbutton.removeEventListener("click", (event)=>{
    event.preventDefault();
    div.style.display = "none";
})

// assignment add a delete  