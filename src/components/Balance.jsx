import React from 'react'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'

const Balance = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="font-medium md:text-lg">Your Balance</h2>
                <p className="text-3xl md:text-5xl">LKR2000.00</p>
            </div>

            <div className="mt-6 flex gap-2">
                <div className="w-full">
                    <div className="flex items-center gap-2">
                        <h2 className="font-medium md:text-lg">Income</h2>
                        <TiArrowSortedUp className="text-primary-green text-4xl" />
                    </div>
                    <p className="text-lg md:text-xl">LKR3000.00</p>
                </div>
                <div className="w-full">
                    <div className="flex items-center gap-2">
                        <h2 className="font-medium md:text-lg">Expenses</h2>
                        <TiArrowSortedDown className="text-4xl text-red-600" />
                    </div>
                    <p className="text-lg md:text-xl">-LKR1000.00</p>
                </div>
            </div>
        </>
    )
}

export default Balance
