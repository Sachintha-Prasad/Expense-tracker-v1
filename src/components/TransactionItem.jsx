import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const TransactionItem = ({
    description,
    transactionAmount,
    transactionType,
}) => {
    console.log(description, transactionAmount, transactionType)

    return (
        <div
            className={`group flex min-h-[50px] cursor-pointer items-center justify-between gap-2 overflow-x-hidden rounded bg-green-50 px-4 py-2 hover:bg-green-100 ${
                transactionType === 'expense' && 'bg-red-50 hover:bg-red-100'
            }`}
        >
            <div className="felx-col flex">
                <p className="capitalize">{description}</p>
            </div>
            <div className="flex items-center gap-4 transition-all duration-300 ease-linear">
                <p>
                    LKR
                    {Number(transactionAmount).toFixed(2)}
                </p>
                {/* <HiOutlineTrash className="translate-x-[100px] rounded-full bg-red-400 p-[6px] text-3xl capitalize text-white transition-transform duration-300 ease-in-out hover:bg-red-300 group-hover:translate-x-0" /> */}
            </div>
        </div>
    )
}
export default TransactionItem
