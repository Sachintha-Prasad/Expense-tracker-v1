import React, { useContext } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { GlobalContext } from '../context/GlobalState'

const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext)

    const capitalize = (text) => {
        return text[0].toUpperCase() + text.slice(1).toLowerCase()
    }

    return (
        <>
            <h2 className="mb-3 font-medium md:text-lg">Transaction history</h2>

            <div className="h-auto max-h-[300px] overflow-y-scroll">
                <div className="flex flex-col gap-2">
                    {transactions.map((transaction, index) => (
                        <div
                            key={index}
                            className={`flex min-h-[50px] cursor-pointer items-center justify-between gap-2 overflow-x-hidden rounded bg-green-50 px-4 py-2 hover:bg-green-100 ${
                                transaction.transactionType === 'expense' &&
                                'bg-red-50 hover:bg-red-100'
                            }`}
                        >
                            <div className="felx-col flex">
                                <p>{capitalize(transaction.description)}</p>
                            </div>
                            <div className="flex items-center gap-4 transition-all duration-300 ease-linear">
                                <p>
                                    LKR
                                    {Number(
                                        transaction.transactionAmount
                                    ).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TransactionHistory
