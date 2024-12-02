const Amount = document.querySelector("#Amount");
const Interest = document.querySelector("#Interest");
const Pay = document.querySelector("#Pay");
const Month = document.querySelector("#Month");



const calculate = () =>{
    const Amountvalue = Amount.value;
    const Interestvalue = Interest.value;
    const Payvalue = Pay.value; 
    
    
    Giveninterest = (Amountvalue * (Interestvalue * 0.01))/Payvalue;
    Monthlypayment = (Amountvalue / Payvalue + Giveninterest);
    Month.innerHTML = `monthly Payment: ${Monthlypayment}`;


    


    
    


}
calculate();

remove = () =>{
    if(Month.innerHTML !== ""){
        Month.innerHTML == "0";
    }
}