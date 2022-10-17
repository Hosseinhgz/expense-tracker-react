import React , { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isFormVisible , setIsFormVisible] = useState(false)
    const addNewExpenseHandler= (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 101).toString()
        }
        props.onAddNewExpense(expenseData)
    }
    const clickHandler = (event) => {
        setIsFormVisible(true)
    }
    const cancelHandler = (event) => {
        setIsFormVisible(false)
    }
    if (!isFormVisible) {
        return <div className="new-expense"><button onClick={clickHandler}>Add Expense</button></div>
    }

    return (
        <div className="new-expense">
            <ExpenseForm
                onCancel={cancelHandler}
                onAddNewExpense={addNewExpenseHandler}
            />
        </div>
    )
}

export default NewExpense