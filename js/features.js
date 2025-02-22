const showCashOutBtn = document.getElementById('show-cash-out')
const showAddMoneyBtn = document.getElementById('show-add-money')

document.getElementById('show-cash-out').addEventListener('click', function(){
    const addMoneyForm = document.getElementById('add-money-form')
    const cashOutForm = document.getElementById('cash-out-form')
    addMoneyForm.classList.add('hidden')
    cashOutForm.classList.remove('hidden')
    showCashOutBtn.classList.add('bg-green-400')
    showAddMoneyBtn.classList.remove('bg-green-400')


})

document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    showCashOutBtn.classList.remove('bg-green-400')
    showAddMoneyBtn.classList.add('bg-green-400')
})