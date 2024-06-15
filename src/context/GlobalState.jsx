// GlobalContext.js
import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'
import { useGetTransactions } from '../hooks/useGetTransactions'

const initialState = {
    transactions: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const { transactions } = useGetTransactions()

    useEffect(() => {
        if (transactions.length > 0) {
            dispatch({ type: 'SET_TRANSACTIONS', payload: transactions })
        }
    }, [transactions])

    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions, dispatch }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
