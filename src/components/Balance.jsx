import React, { useContext } from 'react'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const expenseAmountList = transactions
        .filter((transaction) => transaction.transactionType === 'expense')
        .map((transaction) => transaction.transactionAmount)

    const expenseAmount = expenseAmountList.reduce(
        (total, amount) => total + Number(amount),
        0
    )

    const incomeAmountList = transactions
        .filter((transaction) => transaction.transactionType === 'income')
        .map((transaction) => transaction.transactionAmount)

    const incomeAmount = incomeAmountList.reduce(
        (total, amount) => total + Number(amount),
        0
    )

    const balanceAmount = (incomeAmount - expenseAmount).toFixed(2)

    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="font-medium md:text-lg">Your Balance</h2>
                <p className="text-3xl md:text-5xl">
                    {balanceAmount < 0
                        ? `-LKR${Math.abs(balanceAmount).toFixed(2)}`
                        : `LKR${Math.abs(balanceAmount).toFixed(2)}`}
                </p>
            </div>

            <div className="mt-6 flex gap-2">
                <div className="w-full">
                    <div className="flex items-center gap-1">
                        <TiArrowSortedUp className="text-primary-green text-4xl" />
                        <h2 className="font-medium md:text-lg">Income</h2>
                    </div>
                    <p className="text-lg md:text-xl">
                        LKR{incomeAmount.toFixed(2)}
                    </p>
                </div>
                <div className="w-full">
                    <div className="flex items-center gap-1">
                        <TiArrowSortedDown className="text-4xl text-red-600" />
                        <h2 className="font-medium md:text-lg">Expenses</h2>
                    </div>
                    <p className="text-lg md:text-xl">
                        -LKR{expenseAmount.toFixed(2)}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Balance
