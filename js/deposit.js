// add event listener to the deposit button & get the deposit amount from the deposit input field
document.getElementById("btn-deposit").addEventListener("click", function(){
    const newDeposit = getInputFieldValueById("deposit-field");
    const previousDeposit = getTextElementValueById("deposit-total");
    // calculate new deposit total
    const newDepositTotal = previousDeposit + newDeposit;
    // set new deposit total
    setTextElementValueById("deposit-total", newDepositTotal);

    // get previous balance
    const previousBalance = getTextElementValueById("balance-total");
    // calculate new balance total
    const newBalance = previousBalance + newDeposit;
    // set new balance in the balance field
    setTextElementValueById("balance-total", newBalance);
});


// Press f12 on the keyboard to get a function definition