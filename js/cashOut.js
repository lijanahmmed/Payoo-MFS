document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const amount2 = document.getElementById('amount2').value
    const cashOutAmount = parseFloat(amount2)
    const pinNumber2 = document.getElementById('pin-num2').value
    if(isNaN(cashOutAmount)){
        alert('Input valid number')
        return;
    }
    if(pinNumber2 === '1234'){
        const balance2 = document.getElementById('balance').innerText
        const balance2Number = parseFloat(balance2)
        if(balance2Number >= cashOutAmount){
            const newBalance2 = balance2Number - cashOutAmount;
            document.getElementById('balance').innerText = newBalance2

            const div = document.createElement('div')
            div.innerHTML = `
            <div class="mb-1 border rounded-md p-3 border-white">
            <p class="text-lg font-bold"> Cash out: ${cashOutAmount}Tk.</p>
            <p class="text-sm text-para">Date: ${new Date().toString()}</p>
            </div>
            `
        const transactionHistory = document.getElementById('transaction-history')
        transactionHistory.insertBefore(div, transactionHistory.firstChild)
        }
        else{
            alert('Insufficient Balance')
        }
    }
    else{
        alert('Incorrect pin')
    }
    document.getElementById('amount2').value = ''
    document.getElementById('pin-num2').value = ''
})