import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem.js'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../Filter/ExpensesFilter'

function Expenses(props){
    const [yearFilter, setYearFilter] = useState("2021")
    const yearFilterHandler= (selectedYear) => {
        setYearFilter(selectedYear)
        console.log(selectedYear)
    }

    const filteredExpenses = props.expenses.filter( expense => {
        return expense.date.getFullYear().toString()===yearFilter
    })

        return(
            <Card className='expenses'>
                <ExpensesFilter
                    onSelectYearFilter={yearFilterHandler}
                    selected={yearFilter}
                />
                {filteredExpenses.map(item =>(
                    <ExpenseItem
                        amount={item.amount}
                        title={item.title}
                        date={item.date}
                        key={item.id}
                    />
                ))}
            </Card>

        )
}

export default Expenses