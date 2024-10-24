import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import {format} from 'date-fns';
import React, {useState} from 'react';

function ExpenseItem(props)
{
    const [title,settitle]=useState(props.title);
    const clickhandle=()=>{

      settitle('upated');
        console.log("hello");
    }
    // return( <div> 
        
    //         <h1>Travel Expense </h1>
    //     <div class="car">Car </div>
    //     <div><ExpenseDetail amount="7000"/></div>
    //     <div class="amount">5000 </div>
    //     <hr></hr>
    //    <Eventfunction/>
    // </div>
    // );

    // const month=props.date.toLocaleString('en-US',{month:'long'});
    // const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    // const year=props.date.getFullYear();

    return(
        <div className='expense-item'>
            {/* <div> {format(props.date,'dd/mm/yyyy')}</div> */}
            {/* <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div> */}
            <ExpenseDate date={props.date}/>
            <div className='expense-item-dis'>
                <h2>{title}</h2>
                <div className='expense-item_price'>{props.amount}</div>
            </div>
            <button onClick={clickhandle}>Update Title</button>

        </div>
    );

}

// function ExpenseDetail(props)
// {
//     return <h2>This is Expense deatil {props.amount}</h2>
// }
// function Eventfunction()
// {
//     const myevent=()=>{
//         alert("OK");
//     }
//     return(
//         <button onClick={myevent}>Click Here</button>
//     );
// }
export default ExpenseItem;