import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm=(props)=>{

    const [enteredtitle, setenteredtitle]= useState('');
    const [enteredamount, setenteredamount]= useState('');
    const [entereddate, setentereddate]= useState('');

    // Single State , Holding multiple box values preserving prev state......... 
    // const [userinput, setuserinput]= useState({
    //     enteredtitle:'' , 
    //     enteredamount:'',
    //     entereddate:'',
    // })

    const Titlechangehandler=(event)=>{

        setenteredtitle(event.target.value);
        
        // Single State , Holding multiple box values preserving prev state......... 
        // setuserinput({
        //     ...userinput,
        //     enteredtitle: event.target.value,
        // });
        // setuserinput((prevState)=>{
        //     return {...prevState,enteredtitle:event.target.value}
        // })

        // setuserinput({
        //     ...userinput,
        //     enteramount: event.target.value,
        // });
        // setuserinput((prevState)=>{
        //     return {...prevState, enteredamount:event.target.value}
        // })

        console.log(event.target.value);
    }
    const Amountchangehandler=(event)=>{
        setenteredamount(event.target.value);
        console.log(event.target.value);
    }
    const Datechangehandler=(event)=>{
        setentereddate(event.target.value);
        console.log(event.target.value);
    }

    const Submithandler=(event)=>{
        event.preventDefault();
        const expensedata={ 
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate),
        };
        console.log(expensedata);
        props.onSaveExpensedata(expensedata);
        setenteredtitle('');
        setenteredamount('');
        setentereddate('');
    }

    return(
        <form onSubmit={Submithandler}>
            <div className="new_expense_controls">
                <div className="new_expense_controls">
                    <label>Title</label>
                    <input type="text" onChange={Titlechangehandler} value={enteredtitle} />
                </div>

                <div className="new_expense_controls">
                    <label>Amount</label>
                   <input type="number" min='0.01' step='0.01' onChange={Amountchangehandler} value={enteredamount} />
                </div>

                <div className="new_expense_controls">
                    <label>Date</label>
                    <input type="date" onChange={Datechangehandler} value={entereddate} />
                </div>

              <div className="new_expense_action">
                <button type="submit" >AddExpense</button>
              </div>

            </div>
        </form>
    );
}
export default ExpenseForm;