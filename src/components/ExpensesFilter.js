import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter=(props)=>{

    const dropdowmchangehandler=(event)=>{
        props.onChangeFilter(event.target.value)
        console.log(event.target.value)
    }
    return(
        <div className="expenes-filter">
            <div className="expenes-filter-control">
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropdowmchangehandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2023">2024</option>
                </select>

            </div>

        </div>
    );
}
export default ExpensesFilter;