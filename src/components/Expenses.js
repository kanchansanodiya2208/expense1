import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses=(props)=>{

    const [filteredyear, setfilteredyear]=useState('2020');
    const filterchangehandler=(selectedyear)=>{
        setfilteredyear(selectedyear)
    }
    const FilterExpenses=props.items.filter((expense)=>{
           return expense.date.getFullYear().toString()===filteredyear
    })
    let expensescontent=<p>No Expense Found</p>;
    if(FilterExpenses.length>0){
        expensescontent=FilterExpenses.map((expense)=>(
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                 />
        ))
    }
     
    return(
        <Card className="expenses">

            <ExpensesFilter selected={filteredyear} onChangeFilter={filterchangehandler} />
            {expensescontent}
            {/* {props.items.map((expense)=>(
               
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                 />
                
            ))} */}

        {/* <ExpenseItem 
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
         >
        </ExpenseItem>
        <ExpenseItem 
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
         >
        </ExpenseItem>
        <ExpenseItem 
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
         >
        </ExpenseItem> */}
        </Card>
        
    );
}

<card class="card expenses">
    
</card>
export default Expenses;
