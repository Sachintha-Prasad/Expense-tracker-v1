/* eslint-disable react-hooks/exhaustive-deps */
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../config/firebase-config'
import { useGetUserInfo } from './useGetUserInfo'

export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([])
    const transactionCollectionRef = collection(db, 'transactions')
    const { userId } = useGetUserInfo()

    const getTransactions = async () => {
        let unsubscribe
        try {
            const queryTransactions = query(
                transactionCollectionRef,
                where('userId', '==', userId),
                orderBy('createdAt')
            )

            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = []
                snapshot.forEach((doc) => {
                    const data = doc.data()
                    const id = doc.id

                    docs.push({ ...data, id })
                })
                setTransactions(docs)
            })
        } catch (error) {
            console.error('data fetching error', error)
        }

        return () => unsubscribe()
    }

    useEffect(() => {
        getTransactions()
    }, [])

    return { transactions }
}
