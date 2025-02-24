const showCashOutBtn = document.getElementById('show-cash-out')
const showAddMoneyBtn = document.getElementById('show-add-money')
const showTransaction = document.getElementById('show-transaction')

document.getElementById('show-cash-out').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('transaction-form').classList.add('hidden')
    showCashOutBtn.classList.add('bg-green-400')
    showAddMoneyBtn.classList.remove('bg-green-400')
    showTransaction.classList.remove('bg-green-400')
})

document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-form').classList.add('hidden')
    showCashOutBtn.classList.remove('bg-green-400')
    showAddMoneyBtn.classList.add('bg-green-400')
    showTransaction.classList.remove('bg-green-400')
})

document.getElementById('show-transaction').addEventListener('click', function(){
    document.getElementById('transaction-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    showCashOutBtn.classList.remove('bg-green-400')
    showAddMoneyBtn.classList.remove('bg-green-400')
    showTransaction.classList.add('bg-green-400')
})