const Timer = document.querySelector(".Timer")
let interval;
let timeleft = 60;


function gettingtiming(){

    minute = Math.floor(timeleft)/60;
    seconds = timeleft % 60;
    totaltiming = `${minute.toString()}   :  ${seconds.toString()}`;
    Timer.innerHTML = totaltiming;
}


start = () => {
    interval = setInterval(()=>{
        gettingtiming();

        timeleft--;
        if(timeleft === 0){
            alert("your time is up")
            clearInterval(interval)
            timeleft = 60;

        }
        

    },1000)
    

    

    
    

}

stop = () => {
    clearInterval(interval);

}

reset = () =>{
    Timer.innerHTML = `00 : 00`

}