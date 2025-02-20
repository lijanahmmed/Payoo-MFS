document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value
    
    if(pinNumber === '1234'){
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong pin! Please Enter the Correct Pin.')
    }
})

