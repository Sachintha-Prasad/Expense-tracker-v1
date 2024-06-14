import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const TransactionHistory = () => {
    return (
        <>
            <h2 className="mb-3 font-medium md:text-lg">Transaction history</h2>
            <div className="flex h-auto max-h-[300px] flex-col gap-2 overflow-y-scroll md:max-h-[400px]">
                <div className="group flex min-h-[50px] cursor-pointer items-center justify-between gap-2 overflow-x-hidden rounded bg-green-50 px-4 py-2 hover:bg-green-100">
                    <div className="flex flex-col items-center gap-2 md:flex-row">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="flex translate-x-[50px] items-center gap-4 transition-all duration-300 ease-linear group-hover:translate-x-0">
                        <p>LKR200.00</p>
                        <HiOutlineTrash className="rounded-full bg-red-400 p-[6px] text-3xl capitalize text-white hover:bg-red-300" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransactionHistory
