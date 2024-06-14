import logo from '../../../public/tab-logo.png'
import AddTransaction from '../../components/AddTransaction'

import Balance from '../../components/Balance'
import TransactionHistory from '../../components/TransactionHistory'

export const ExpenseTracker = () => {
    return (
        <div className="container max-w-[1200px]">
            <div className="text-primary-green flex items-center gap-2 pt-6 font-medium md:text-xl">
                <img src={logo} alt="" className="max-w-[50px]" />
                Expense Tracker V1
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-6 text-zinc-800 md:grid-cols-2 md:gap-y-12 md:py-16">
                <div className="flex w-full flex-col justify-between">
                    <Balance />
                </div>

                <div className="w-full border-t-2 border-zinc-200 pt-6 md:border-none md:pt-12">
                    <AddTransaction />
                </div>

                <div className="w-full border-t-2 border-zinc-200 pt-6 md:col-span-2 md:pt-12">
                    <TransactionHistory />
                </div>
            </div>
        </div>
    )
}
