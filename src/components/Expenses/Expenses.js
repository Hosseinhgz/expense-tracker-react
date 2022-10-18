import React, {useState} from 'react'
import ExpensesList from './ExpensesList.js'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../Filter/ExpensesFilter'
import ExpensesChart from './ExpensesChart'

function Expenses(props){
    const [yearFilter, setYearFilter] = useState("2021")
    const yearFilterHandler= (selectedYear) => {
        setYearFilter(selectedYear)
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
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        )
}

export default Expenses