import { auth, provider } from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import logo from '../../../public/tab-logo.png'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'

export const Auth = () => {
    const navigate = useNavigate()
    const { isAuth } = useGetUserInfo()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        const authInfo = {
            userId: result.user.uid,
            name: result.user.displayName,
            profilePhoto: result.user.photoURL,
            isAuth: true,
        }
        localStorage.setItem('auth', JSON.stringify(authInfo))
        navigate('/expense-tracker')
    }

    if (isAuth) return <Navigate to={'/expense-tracker'} />

    return (
        <div className="bg-gradient-to-r from-teal-500 to-green-300">
            <div className="container flex min-h-screen flex-col items-center justify-center gap-6">
                <h1 className="text-center text-3xl font-bold text-white drop-shadow-lg md:text-5xl">
                    Expense Tracker V1
                </h1>
                <img src={logo} alt="" className="w-full max-w-[250px]" />
                <div className="flex flex-col items-center gap-2">
                    <p className="text-center text-xl font-medium text-teal-50">
                        sign in, with your google account
                    </p>
                    <button
                        onClick={signInWithGoogle}
                        className="rounded bg-zinc-800 px-[1em] py-[.5em] text-lg font-semibold capitalize text-white"
                    >
                        google
                    </button>
                </div>
            </div>
        </div>
    )
}
