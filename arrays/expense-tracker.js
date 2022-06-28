const account = {
    name: 'Adrian',
    expenses: [],
    income: [],
    addExpense: function (desc, amount) {
        this.expenses.push({
            description: desc,
            amount: amount
        })
    },
    addIncome: function (desc, amount) {
        this.income.push({
            description: desc,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpense = 0
        let totalIncome = 0
        let accountBalance = 0
        this.expenses.forEach(function (expense) {
            totalExpense = totalExpense + expense.amount
        });
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        });
        accountBalance = totalIncome - totalExpense
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income.  $${totalExpense} in expenses.`
    }
}


const addExpense = function (desc, amount) {

}

const getAccountSummary = function () {

}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())