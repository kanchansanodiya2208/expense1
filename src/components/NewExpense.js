import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
const SaveExpenseDataHandler=(enterexpensedata)=>{
      const expensedata={
        ...enterexpensedata,
        id:Math.random().toString()
      };
      props.onaddexpense(expensedata);
}

    return(
        <div className="new-expense">
          <ExpenseForm onSaveExpensedata={SaveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}
export default NewExpense;