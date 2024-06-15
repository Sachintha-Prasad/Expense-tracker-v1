import React, { useState } from 'react'
import { useAddTransaction } from '../hooks/useAddTransaction'

const AddTransaction = () => {
    const { addTransaction } = useAddTransaction()
    const [description, setDescription] = useState('')
    const [transactionAmount, setTransactionAmount] = useState('')
    const [transactionType, setTransactionType] = useState('expense')

    const resetInput = () => {
        setDescription('')
        setTransactionAmount('')
        setTransactionType('expense')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        addTransaction(description, transactionAmount, transactionType)
        resetInput()
    }

    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        className="w-full rounded border border-zinc-800 p-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="amount"
                        className="w-full rounded border border-zinc-800 p-2"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                        required
                    />
                </div>
                <div className="ml-1 flex gap-6">
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="trans-type"
                            id="income"
                            value="income"
                            checked={transactionType === 'income'}
                            onChange={(e) => setTransactionType(e.target.value)}
                            className="scale-125 cursor-pointer"
                        />
                        <label htmlFor="income">Income</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="trans-type"
                            id="expense"
                            value="expense"
                            checked={transactionType === 'expense'}
                            onChange={(e) => setTransactionType(e.target.value)}
                            className="scale-125 cursor-pointer"
                        />
                        <label htmlFor="expense">Expense</label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="hover:bg-primary-green focus:bg-primary-green mt-3 rounded bg-zinc-800 px-[1em] py-[.5em] font-semibold capitalize text-white"
                >
                    Add transaction
                </button>
            </form>
        </>
    )
}

export default AddTransaction
