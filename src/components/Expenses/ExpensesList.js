import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    let expenseContent = <p>No expenses found.</p>;
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.items.map(item =>(
            <ExpenseItem
                amount={item.amount}
                title={item.title}
                date={item.date}
                key={item.id}
            />
            ))}
        </ul>

    )
}


export default ExpensesList