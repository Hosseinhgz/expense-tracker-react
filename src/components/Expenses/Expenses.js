import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem.js'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../Filter/ExpensesFilter'

function Expenses(props){
    const [yearFilter, setYearFilter] = useState(2021)
    const expenses = props.expenses
    const yearFilterHandler= (selectedYear) => {
        setYearFilter(selectedYear)
        console.log(selectedYear)
    }
    return(
        <Card className='expenses'>
            <ExpensesFilter onSelectYearFilter={yearFilterHandler} selected={yearFilter}/>
            {props.expenses.map(item =>(
                <ExpenseItem
                    amount={item.amount}
                    title={item.title}
                    date={item.date}
                />
            ))}
        </Card>

    )
}

export default Expenses