import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ListComponent from './components/ListComponent';
import FormCompnents from './components/FormCompnents';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const DammyExpense=[
  {
    id: 'e1',
    title: 'Travel Expense',
    amount: 500,
    date: new Date('2023-05-30'),

  },
  {
    id: 'e2',
    title: 'Stationery Expense ',
    amount: 600,
    date: new Date('2022-11-06'),

  },
  {
    id: 'e3',
    title: 'Medical Expense',
    amount: 700,
    date: new Date('2021-10-03'),

  },
  {
    id: 'e4',
    title: 'Insurance Expense',
    amount: 7000,
    date: new Date('2023-10-02'),

  },
  {
    id: 'e5',
    title: 'Rent Expense',
    amount: 6000,
    date: new Date('2023-10-01'),

  }, 
];


function App() {
  
 const [expenses, setexpenses]=useState(DammyExpense);

const addexpensehandler=expense=>{
  console.log("This Data is from the first parebt component ");
  

  // saving expenes array inside useState prev state.......
  setexpenses((prevexpenses)=>{
          return[expense, ...prevexpenses];
  })
  console.log(expense);
}

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //      Welcome to learn React js
    //     </p>
    <div>
      <NewExpense onaddexpense={addexpensehandler}></NewExpense>
    <center><h2>My Expenses</h2></center>
    <Expenses items={expenses}></Expenses>
    </div>
        
        // <div>
        // 
        //  </div>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
