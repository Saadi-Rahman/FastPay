/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat()
3. get the previous withdraw total
4. calculate total withdraw amount
4-5. set total withdraw amount
5. get previous balance total
6. calculate new balance total
6-5. set the new balance total
7. clear the withdraw field
*/



// step-1: add event listener to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function(){
    // step-2: get the withdraw amount from the withdraw input field
    // for input field use .value to get the value inside the input field
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    console.log("new withdraw:", typeof(newWithdraw), newWithdraw);

    // step-7: clear the withdraw field
    withdrawField.value = "";

    // check NaN or blank input
    if(isNaN(newWithdraw)) {
        alert("Please provide a valid number.");
        return;
    }

    // step-3: get the previous withdraw total
    // for non-input (element other than input, textarea) use innerText to get the text
    const previousWithdrawElement = document.getElementById("withdraw-total");
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    console.log("previous withdraw:", typeof(previousWithdraw), previousWithdraw);


    // step-5: get previous balance total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    console.log("previous balance total:", typeof(previousBalance), previousBalance);


    // validation
    if(previousBalance < newWithdraw) {
        alert("You do not have enough balance to withdraw. Please deposit first!");
        return;
    }

    // step-4: calculate total withdraw amount
    const totalWithdraw = previousWithdraw + newWithdraw;
    // set total withdraw amount
    previousWithdrawElement.innerText = totalWithdraw;
    console.log("total withdraw:", typeof(totalWithdraw), totalWithdraw);


    // step-6: calculate new balance total
    const newBalance = previousBalance - newWithdraw;
    // set the new balance total
    balanceTotalElement.innerText = newBalance;
    console.log("new balance:", typeof(newBalance), newBalance);
})