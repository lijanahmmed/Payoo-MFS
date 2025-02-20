document.getElementById('show-cash-out').addEventListener('click', function(){
    const addMoneyForm = document.getElementById('add-money-form')
    const cashOutForm = document.getElementById('cash-out-form')
    addMoneyForm.classList.add('hidden')
    cashOutForm.classList.remove('hidden')
})

document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})