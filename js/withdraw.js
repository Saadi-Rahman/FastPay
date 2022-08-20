// add event listener to the withdraw button & get the withdraw amount from the withdraw input field
document.getElementById("btn-withdraw").addEventListener("click", function(){
    const newWithdraw = getInputFieldValueById("withdraw-field");
    const previousWithdraw = getTextElementValueById("withdraw-total");
    // calculate new withdraw total
    const newWithdrawTotal = previousWithdraw + newWithdraw;
    // set new withdraw total 
    setTextElementValueById("withdraw-total", newWithdrawTotal);

    // get previous balance 
    const previousBalance = getTextElementValueById("balance-total")
    // calculate new balance total
    const newBalance = previousBalance - newWithdraw;
    // set new balance in the balance field
    setTextElementValueById("balance-total", newBalance);
});