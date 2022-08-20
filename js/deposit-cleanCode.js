
document.getElementById("btn-deposit").addEventListener("click", function(){
    
    const depositField = document.getElementById("deposit-field");
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    const previousDepositElement = document.getElementById("deposit-total");
    const previousDepositString = previousDepositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const currentDeposit = previousDeposit + newDeposit;
    previousDepositElement.innerText = currentDeposit;

    // add balance current total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const newBalance = previousBalance + newDeposit;
    balanceTotalElement.innerText = newBalance;

    
    depositField.value = "";
});