import React , { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState("")
    const [enteredAmount,setEnteredAmount] = useState("")
    const [enteredDate,setEnteredDate] = useState("")

    // Another way
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...userInput,
    //             enteredTitle: event.target.value
    //         }
    //     })
    // }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event)=>{
    event.preventDefault()
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate
    }
    props.onAddNewExpense(expenseData)
    setEnteredDate("")
    setEnteredAmount("")
    setEnteredTitle("")
    }

    const resetHandler = () => {
        setEnteredDate("")
        setEnteredAmount("")
        setEnteredTitle("")
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2021-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="newexpense__actions">
                <button type="submit">Add Expense</button>
                <button type="reset" onClick={resetHandler}>Reset</button>
            </div>
        </form>
    )
}

export default ExpenseForm
