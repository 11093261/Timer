const Display = document.querySelector(".display")
const cal = (parameter) => {
    if(Display.textContent === "0"){
        Display.textContent = parameter;
        
        

    }else {
        Display.textContent +=parameter;
    }
}

const sum = () => {
    try{
        Display.textContent = eval(Display.textContent)
    }
    catch(e){
        Display.textContent = ("error");
    }
}


const clear = () => {
    Display.textContent = "0"
}

const del = () =>{
    Display.textContent =  Display.textContent.slice(0, -1);
}
