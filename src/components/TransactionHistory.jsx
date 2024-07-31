import React, { useContext } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { GlobalContext } from '../context/GlobalState'
import TransactionItem from './TransactionItem'

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
                        <React.Fragment key={index}>
                            <TransactionItem
                                description={transaction.description}
                                transactionAmount={
                                    transaction.transactionAmount
                                }
                                transactionType={transaction.transactionType}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TransactionHistory
