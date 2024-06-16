import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const TransactionItem = (description, transactionAmount, transactionType) => {
    console.log(description, transactionAmount, transactionType)

    return (
        <div className="group flex min-h-[50px] cursor-pointer items-center justify-between gap-2 overflow-x-hidden rounded bg-green-50 px-4 py-2 hover:bg-green-100">
            <div className="flex flex-col items-center gap-2 md:flex-row">
                <p>{description}</p>
            </div>
            <div className="flex translate-x-[50px] items-center gap-4 transition-all duration-300 ease-linear group-hover:translate-x-0">
                <p>{transactionAmount}</p>
                <HiOutlineTrash className="rounded-full bg-red-400 p-[6px] text-3xl capitalize text-white hover:bg-red-300" />
            </div>
        </div>
    )
}
export default TransactionItem
