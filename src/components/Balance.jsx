import React, { useContext } from 'react'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const expenseAmountList = transactions.map(
        (transaction) =>
            transaction.transactionType === 'expense' &&
            transaction.transactionAmount
    )

    const expenseAmount = expenseAmountList
        .reduce((total, amount) => (total += amount))
        .toFixed(2)

    const incomeAmountList = transactions.map(
        (transaction) =>
            transaction.transactionType === 'income' &&
            transaction.transactionAmount
    )

    const incomeAmount = incomeAmountList
        .reduce((total, amount) => (total += amount))
        .toFixed(2)

    const balanceAmount = (incomeAmount - expenseAmount).toFixed(2)

    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="font-medium md:text-lg">Your Balance</h2>
                <p className="text-3xl md:text-5xl">LKR{balanceAmount}</p>
            </div>

            <div className="mt-6 flex gap-2">
                <div className="w-full">
                    <div className="flex items-center gap-2">
                        <h2 className="font-medium md:text-lg">Income</h2>
                        <TiArrowSortedUp className="text-primary-green text-4xl" />
                    </div>
                    <p className="text-lg md:text-xl">LKR{incomeAmount}</p>
                </div>
                <div className="w-full">
                    <div className="flex items-center gap-2">
                        <h2 className="font-medium md:text-lg">Expenses</h2>
                        <TiArrowSortedDown className="text-4xl text-red-600" />
                    </div>
                    <p className="text-lg md:text-xl">-LKR{expenseAmount}</p>
                </div>
            </div>
        </>
    )
}

export default Balance
