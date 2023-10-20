const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const cloths = document.getElementById("cloths");
const expenses = document.getElementById("expenses");
const balance = document.getElementById("balance");
const save = document.getElementById('save')
const saveAmount = document.getElementById('saving-amount')
const remainingBalance = document.getElementById('Remaining-balance')

document.getElementById("calculate").addEventListener("click", function () {
  const incomeData = parseInt(income.value);
  const foodData = parseInt(food.value);
  const rentData = parseInt(rent.value);
  const clothsData = parseInt(cloths.value);
  const totalExpences = foodData + rentData + clothsData;

  const total = incomeData - totalExpences;

  expenses.innerText = totalExpences;
  balance.innerText = total;
});

document.getElementById('save-id').addEventListener('click', function () {
    const balanceAmount = parseInt(balance.innerText)
    const SavePercent = parseInt(save.value)

    const saving = balanceAmount * (SavePercent/100)
    
    saveAmount.innerText = saving

    remainingBalance.innerText = balanceAmount - saving

})