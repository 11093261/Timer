











const  Hour = document.querySelector(".hour");
const Minutes = document.querySelector(".minute");
const Seconds = document.querySelector(".seconds");
const clockfour = document.querySelector(".clock-four")
const regulate = document.querySelector(".regulator")


const clockcount = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getMinutes();
    let ampm = "pm"
    
    

    if(h > 12){
        h - 12;
        ampm = "pm";

         h = h > 10 ? "0" + h : h;
         m = m > 10 ? "0" + m : m;
         s = s > 10 ? "0" + s : s;
        
    }
    Hour.textContent = h;
    Minutes.textContent = m;
    Seconds.textContent = s;

    setTimeout(()=>{
        
        clockcount();
    },1000);
    



}
clockcount();


