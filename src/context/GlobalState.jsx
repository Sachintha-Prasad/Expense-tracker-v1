import react, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {
            userId: '1',
            description: 'salary',
            transactionAmount: 350000,
            transactionType: 'income',
        },
        {
            userId: '2',
            description:
                'buy a new laptop for my friend because his birthday is in tommorow',
            transactionAmount: 250000,
            transactionType: 'expense',
        },
        {
            userId: '3',
            description: 'buy a dog',
            transactionAmount: 30000,
            transactionType: 'expense',
        },
        {
            userId: '4',
            description: 'sell old phone',
            transactionAmount: 100000,
            transactionType: 'income',
        },
    ],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions }}>
            {children}
        </GlobalContext.Provider>
    )
}
