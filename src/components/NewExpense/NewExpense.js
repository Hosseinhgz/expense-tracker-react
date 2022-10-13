import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const addNewExpenseHandler= (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 101).toString()
        }
        props.onAddNewExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onAddNewExpense={addNewExpenseHandler}/>
        </div>
    )
}

export default NewExpense