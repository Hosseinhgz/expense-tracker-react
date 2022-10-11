import './ExpenseDate.css'

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month:'long'})
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-US', {day:'2-digit'})

    return(
        <div className='date-container'>
            <div className='date-day'>{day}</div>
            <div className='date-month'>{month}</div>
            <div className='date-year'>{year}</div>
        </div>
    )
}

export default ExpenseDate