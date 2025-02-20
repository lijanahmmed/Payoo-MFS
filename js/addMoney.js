document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value
    const addMoneyAmount = parseFloat(amount)
    const pinNumber1 = document.getElementById('pin-num1').value
    if(pinNumber1 === '1234'){
        const balance = document.getElementById('balance').innerText
        const balanceNumber = parseFloat(balance)
        const newBalance = balanceNumber + addMoneyAmount;
        document.getElementById('balance').innerText = newBalance;
    }
    else{
        alert('Incorrect pin')
    }
})