import logo from '/tab-logo.png'
import AddTransaction from '../../components/AddTransaction'
import Balance from '../../components/Balance'
import TransactionHistory from '../../components/TransactionHistory'
import { GlobalProvider } from '../../context/GlobalState'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
import { TbLogout2 } from 'react-icons/tb'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase-config'
import { useNavigate } from 'react-router-dom'

export const ExpenseTracker = () => {
    const { name, profilePhoto } = useGetUserInfo()
    const navigate = useNavigate()

    const userSignOut = async () => {
        try {
            await signOut(auth)
            localStorage.clear()
            navigate('/')
        } catch (error) {
            console.error('user signout error', error)
        }
    }

    return (
        <GlobalProvider>
            <div className="container max-w-[950px]">
                <div className="flex items-center justify-between pt-6">
                    <div className="text-primary-green flex items-center gap-2 font-medium md:text-xl">
                        <img src={logo} alt="" className="max-w-[50px]" />
                        Expense Tracker V1
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={userSignOut}
                            className="bg-primary-green flex gap-2 rounded-full px-2 py-2 font-medium capitalize text-white hover:bg-zinc-800 md:px-3"
                        >
                            <p className="hidden md:inline-block">logout</p>
                            <TbLogout2 className="inline text-2xl text-white" />
                        </button>

                        <img
                            src={profilePhoto}
                            alt=""
                            className="max-w-[40px] rounded-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-6 text-zinc-800 md:grid-cols-2 md:gap-y-12 md:py-16">
                    <div className="flex w-full flex-col justify-between">
                        <Balance />
                    </div>
                    <div className="w-full border-t-2 border-zinc-200 pt-6 md:border-none md:pt-0">
                        <AddTransaction />
                    </div>
                    <div className="w-full border-t-2 border-zinc-200 pt-6 md:col-span-2 md:pt-12">
                        <TransactionHistory />
                    </div>
                </div>
            </div>
        </GlobalProvider>
    )
}
