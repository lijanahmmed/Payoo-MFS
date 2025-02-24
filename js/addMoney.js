document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value
    const addMoneyAmount = parseFloat(amount)
    const pinNumber1 = document.getElementById('pin-num1').value
    if(isNaN(addMoneyAmount)){
        alert('Input valid number')
        return;
    }

    if(pinNumber1 === '1234'){
        const balance = document.getElementById('balance').innerText
        const balanceNumber = parseFloat(balance)
        const newBalance = balanceNumber + addMoneyAmount;
        document.getElementById('balance').innerText = newBalance;

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="mb-1 border rounded-md p-3 border-white">
        <p class="text-lg font-bold"> Send Money: ${addMoneyAmount}Tk.</p>
        <p class="text-sm text-para">Date: ${new Date().toString()}</p>
        </div>
        `
        const transactionHistory = document.getElementById('transaction-history')
        transactionHistory.insertBefore(div, transactionHistory.firstChild)
    }
    else{
        alert('Incorrect pin')
    }
    document.getElementById('amount').value = ''
    document.getElementById('pin-num1').value = ''
})