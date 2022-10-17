import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    let expenseContent = <p>No expenses found.</p>;
    if (props.items.length > 0) {
        expenseContent = props.items.map(item =>(
            <ExpenseItem
                amount={item.amount}
                title={item.title}
                date={item.date}
                key={item.id}
            />
        ))
    }

    return (
        <>
            {expenseContent}
        </>
    )
}


export default ExpensesList