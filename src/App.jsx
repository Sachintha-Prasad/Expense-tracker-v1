import React from 'react'
import { Auth } from './pages/auth'
import { ExpenseTracker } from './pages/expense-tracker/index'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

const App = () => {
    const route = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Auth />} />
                <Route path="/expense-tracker" element={<ExpenseTracker />} />
            </Route>
        )
    )

    return <RouterProvider router={route} />
}

export default App
