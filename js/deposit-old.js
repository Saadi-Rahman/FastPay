// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function(){
    // step-2: get the deposit amount from the deposit input field
    // for input field use .value to get the value inside the input field
    const depositField = document.getElementById("deposit-field");
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);
    console.log("new deposit:", typeof(newDeposit), newDeposit);

    // step-7: clear the deposit field
    depositField.value = "";

    // check NaN or blank input
    if(isNaN(newDeposit)) {
        alert("Please provide a valid number.");
        return;
    }

    // step-3: get the current deposit total
    // for non-input (element other than input, textarea) use innerText to get the text
    const previousDepositElement = document.getElementById("deposit-total");
    const previousDepositString = previousDepositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    console.log("previous deposit:", typeof(previousDeposit), previousDeposit);

    // step-4: add numbers to set the total deposit
    const currentDeposit = previousDeposit + newDeposit;
    // set the deposite total
    previousDepositElement.innerText = currentDeposit;
    console.log("current deposit:", typeof(currentDeposit), currentDeposit);


    // step-5: get balance current total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    console.log("previous balance:", typeof(previousBalance), previousBalance);

   
    // step-6: calculate current total balance
    const newBalance = previousBalance + newDeposit;
    // set the balance total
    balanceTotalElement.innerText = newBalance;
    console.log("current balance:", typeof(newBalance), newBalance);

});