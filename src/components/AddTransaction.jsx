import React from 'react'
import { useAddTransaction } from '../hooks/useAddTransaction'

const AddTransaction = () => {
    const { addTransaction } = useAddTransaction()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(addTransaction('haircut', 300, 'expense'))
    }

    return (
        <>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        className="w-full rounded border border-zinc-800 p-2"
                        // required
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="amount"
                        className="w-full rounded border border-zinc-800 p-2"
                        // required
                    />
                </div>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="trans-type"
                            id="income"
                            value="income"
                        />
                        <label htmlFor="income">Income</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="trans-type"
                            id="expense"
                            value="expense"
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
