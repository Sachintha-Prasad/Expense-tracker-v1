import React, { useContext } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { GlobalContext } from '../context/GlobalState'

const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)

    return (
        <>
            <h2 className="mb-3 font-medium md:text-lg">Transaction history</h2>

            <div className="h-auto max-h-[300px] overflow-y-scroll">
                <div className="flex flex-col gap-2">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.userId}
                            className={`group flex min-h-[50px] cursor-pointer items-center justify-between gap-2 overflow-x-hidden rounded bg-green-50 px-4 py-2 hover:bg-green-100 ${
                                transaction.transactionType === 'expense' &&
                                'bg-red-50 hover:bg-red-100'
                            }`}
                        >
                            <p>{transaction.description}</p>
                            <div className="flex translate-x-[50px] items-center gap-4 transition-all duration-300 ease-linear group-hover:translate-x-0">
                                <p>
                                    LKR
                                    {transaction.transactionAmount.toFixed(2)}
                                </p>
                                <HiOutlineTrash className="rounded-full bg-red-400 p-[6px] text-3xl capitalize text-white hover:bg-red-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TransactionHistory
