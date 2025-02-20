document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const amount2 = document.getElementById('amount2').value
    const cashOutAmount = parseFloat(amount2)
    const pinNumber2 = document.getElementById('pin-num2').value
    if(pinNumber2 === '1234'){
        const balance2 = document.getElementById('balance').innerText
        const balance2Number = parseFloat(balance2)
        const newBalance2 = balance2Number - cashOutAmount;
        document.getElementById('balance').innerText = newBalance2
        document.getElementById('amount2').value = '';
        document.getElementById('pin-num2').value = ''
    }
    else{
        alert('Incorrect pin')
    }
})